import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component'
import { RecipesRoutingModule } from './recipes-routing.module'
import { BananenComponent } from './content/bananen/bananen.component'
import { BasmatiReisComponent } from './content/basmati-reis/basmati-reis.component'
import { MandelkuchenComponent } from './content/mandelkuchen/mandelkuchen.component'
import { RizCasimirComponent } from './content/riz-casimir/riz-casimir.component'
import { SuesssauerComponent } from './content/suesssauer/suesssauer.component'
import { RecipeComponent } from './recipe/recipe.component'
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
import {RecipesService} from './recipes.service'
import {ImageSliderModule} from '../common/image-slider/image-slider.module'
import {PastaComponent} from './content/pasta/pasta.component'
import { RecipeImgSrcPipe } from './recipe-img-src.pipe'
import { RecipeImgAltPipe } from './recipe-img-alt.pipe'

@NgModule({
  declarations: [
    RecipeOverviewComponent,
    BananenComponent,
    BasmatiReisComponent,
    MandelkuchenComponent,
    RizCasimirComponent,
    SuesssauerComponent,
    RecipeComponent,
    AnanaskuchenComponent,
    BologneseComponent,
    BurgerComponent,
    CheesecakeComponent,
    ChickenpieComponent,
    CookieComponent,
    CremeComponent,
    CupcakeComponent,
    CurryComponent,
    EnchiladasComponent,
    FrenchToastComponent,
    FritataComponent,
    GluehweinComponent,
    HonigPouletComponent,
    IndischesBrotComponent,
    JellyShotsComponent,
    KuchenComponent,
    LasagneComponent,
    LebkuchenComponent,
    MandelnComponent,
    MojitoComponent,
    NidelwaheComponent,
    OfenPouletComponent,
    OmletteComponent,
    PancakesComponent,
    ReisComponent,
    SalatsauceComponent,
    SchokoladenkuchenComponent,
    TassenkuchenComponent,
    TeeComponent,
    TiramisuComponent,
    WaffelnComponent,
    ZueriDoenerComponent,
    TomatenPouletComponent,
    WaffelnGlutenfreiComponent,
    PancakesGlutenfreiComponent,
    PastaComponent,
    RecipeImgSrcPipe,
    RecipeImgAltPipe
  ],
  providers: [RecipesService, RecipeImgSrcPipe],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ImageSliderModule
  ]
})
export class RecipesModule { }
