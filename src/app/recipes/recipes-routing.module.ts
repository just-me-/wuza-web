import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component'
import {SuesssauerComponent} from './content/suesssauer/suesssauer.component'
import {RizCasimirComponent} from './content/riz-casimir/riz-casimir.component'
import {MandelkuchenComponent} from './content/mandelkuchen/mandelkuchen.component'
import {BasmatiReisComponent} from './content/basmati-reis/basmati-reis.component'
import {BananenComponent} from './content/bananen/bananen.component'
import {AnanaskuchenComponent} from './content/ananaskuchen/ananaskuchen.component'
import {BologneseComponent} from './content/bolognese/bolognese.component'
import {BurgerComponent} from './content/burger/burger.component'
import {CheesecakeComponent} from './content/cheesecake/cheesecake.component'
import {ChickenpieComponent} from './content/chicken-pie/chicken-pie.component'
import {CookieComponent} from './content/cookie/cookie.component'
import {CremeComponent} from './content/creme/creme.component'
import {CupcakeComponent} from './content/cupcakes/cupcakes.component'
import {CurryComponent} from './content/curry/curry.component'
import {EnchiladasComponent} from './content/enchiladas/enchiladas.component'
import {FrenchToastComponent} from './content/french-toast/french-toast.component'
import {FritataComponent} from './content/fritata/fritata.component'
import {GluehweinComponent} from './content/gluehwein/gluehwein.component'
import {HonigPouletComponent} from './content/honig-poulet/honig-poulet.component'
import {IndischesBrotComponent} from './content/indisches-brot/indisches-brot.component'
import {JellyShotsComponent} from './content/jelly-shots/jelly-shots.component'
import {KuchenComponent} from './content/kuchen/kuchen.component'
import {LasagneComponent} from './content/lasagne/lasagne.component'
import {LebkuchenComponent} from './content/lebkuchen/lebkuchen.component'
import {MandelnComponent} from './content/mandeln/mandeln.component'
import {MojitoComponent} from './content/mojito/mojito.component'
import {NidelwaheComponent} from './content/nidelwahe/nidelwahe.component'
import {OfenPouletComponent} from './content/ofen-poulet/ofen-poulet.component'
import {OmletteComponent} from './content/omlette/omlette.component'
import {PancakesComponent} from './content/pancakes/pancakes.component'
import {ReisComponent} from './content/reis/reis.component'
import {SalatsauceComponent} from './content/salatsauce/salatsauce.component'
import {SchokoladenkuchenComponent} from './content/schokoladenkuchen/schokoladenkuchen.component'
import {TassenkuchenComponent} from './content/tassenkuchen/tassenkuchen.component'
import {TeeComponent} from './content/tee/tee.component'
import {TiramisuComponent} from './content/tiramisu/tiramisu.component'
import {WaffelnComponent} from './content/waffeln/waffeln.component'
import {WaffelnGlutenfreiComponent} from './content/waffeln-glutenfrei/waffeln-glutenfrei.component'
import {ZueriDoenerComponent} from './content/zueri-doener/zueri-doener.component'
import {TomatenPouletComponent} from './content/tomaten-poulet/tomaten-poulet.component'
import {PancakesGlutenfreiComponent} from './content/pancakes-glutenfrei/pancakes-glutenfrei.component'
import {PastaComponent} from './content/pasta/pasta.component'
import {SafranPuddingComponent} from './content/safran-pudding/safran-pudding.component'
import {KastanienKuchenComponent} from './content/kastanien-kuchen/kastanien-kuchen.component'
import {DaisysChilliComponent} from './content/daisys-chilli/daisys-chilli.component'
import {BrowniesVeganComponent} from './content/brownies-vegan/brownies-vegan.component'


const routes: Routes = [
  { path: '', component: RecipeOverviewComponent },
  { path: 'suesssauer',  component: SuesssauerComponent },
  { path: 'riz-casimir', component: RizCasimirComponent },
  { path: 'mandelkuchen', component: MandelkuchenComponent },
  { path: 'basmati-reis',  component: BasmatiReisComponent },
  { path: 'bananen', component: BananenComponent },
  { path: 'ananaskuchen', component: AnanaskuchenComponent },
  { path: 'bolognese', component: BologneseComponent },
  { path: 'burger',  component: BurgerComponent },
  { path: 'cheesecake',  component: CheesecakeComponent },
  { path: 'chickenpie', component: ChickenpieComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'creme', component: CremeComponent },
  { path: 'cupcake',  component: CupcakeComponent },
  { path: 'curry', component: CurryComponent  },
  { path: 'enchiladas', component: EnchiladasComponent  },
  { path: 'french-toast',  component: FrenchToastComponent },
  { path: 'gluehwein',  component: GluehweinComponent },
  { path: 'fritata',  component: FritataComponent  },
  { path: 'honig-poulet',  component: HonigPouletComponent },
  { path: 'indisches-brot',  component: IndischesBrotComponent },
  { path: 'jelly-shots',  component: JellyShotsComponent },
  { path: 'kuchen',  component: KuchenComponent },
  { path: 'lasagne',  component: LasagneComponent },
  { path: 'lebkuchen',  component: LebkuchenComponent },
  { path: 'mandeln',  component: MandelnComponent },
  { path: 'mojito',  component: MojitoComponent },
  { path: 'nidelwaehe',  component: NidelwaheComponent },
  { path: 'ofen-poulet',  component: OfenPouletComponent },
  { path: 'omlette',  component: OmletteComponent },
  { path: 'pasta',  component: PastaComponent },
  { path: 'pancakes',  component: PancakesComponent },
  { path: 'pancakes-glutenfrei',  component: PancakesGlutenfreiComponent },
  { path: 'reis',  component: ReisComponent },
  { path: 'salatsauce',  component: SalatsauceComponent },
  { path: 'schokoladenkuchen',  component: SchokoladenkuchenComponent },
  { path: 'tassenkuchen',  component: TassenkuchenComponent },
  { path: 'tee',  component: TeeComponent },
  { path: 'tiramisu',  component: TiramisuComponent },
  { path: 'waffeln',  component: WaffelnComponent },
  { path: 'waffeln-glutenfrei',  component: WaffelnGlutenfreiComponent },
  { path: 'zueri-doener',  component: ZueriDoenerComponent },
  { path: 'tomaten-poulet', component: TomatenPouletComponent },
  { path: 'safran-pudding', component: SafranPuddingComponent },
  { path: 'kastanien-kuchen', component: KastanienKuchenComponent },
  { path: 'daisys-chilli', component: DaisysChilliComponent },
  { path: 'brownies-vegan', component: BrowniesVeganComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
