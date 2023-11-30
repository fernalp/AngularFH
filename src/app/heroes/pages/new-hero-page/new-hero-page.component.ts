import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: [
  ]
})
export class NewHeroPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        // tap((params) => console.log(`Params`, params)),
        switchMap(({ id }) => this.heroService.getHeroById(id)),
      )
      .subscribe(hero => {
        if (!hero) {
          return this.router.navigateByUrl('/')
        }
        this.heroForm.reset(hero);
        return;
      })
  }

  get currentHero(): Hero {
    return this.heroForm?.value as Hero;
  }

  onSubmit(): void {

    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackbar(`${hero.superhero} updated!`)
        });
      return;
    }

    this.heroService.addHero(this.currentHero)
      .subscribe(
        hero => {
          this.showSnackbar(`${hero.superhero} created!`);
          this.router.navigate(['/heroes/edit', hero.id]);
        }
      )

  }

  onDeleteHero(): void {

    if (!this.currentHero.id) throw new Error("Hero id is required!");

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => result),
        switchMap(() => this.heroService.deleteHeroById(this.currentHero.id)),
        filter(wasDeleted => wasDeleted),
      ).subscribe(() =>
        this.router.navigateByUrl("/")
      )

    // dialogRef.afterClosed().subscribe(result => {
    //   if (!result) return;


    //   this.heroService.deleteHeroById(this.currentHero.id)
    //     .subscribe(wasDeleted => {
    //       this.router.navigateByUrl("/");
    //     });

    // })


  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    })
  }

}