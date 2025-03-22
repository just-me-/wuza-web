import {Type} from '@angular/core'
import {SaComponent} from './content/sa/sa.component'
import {AntenneComponent} from './content/antenne/antenne.component'
import {EasymechComponent} from './content/easymech/easymech.component'
import {RockTheRingComponent} from './content/rock-the-ring/rock-the-ring.component'
import {WgAppComponent} from './content/wg-app/wg-app.component'
import {SbbComponent} from './content/sbb/sbb.component'
import {TesoAddonsComponent} from './content/teso-addons/teso-addons.component'
import {WordpressComponent} from './content/wordpress/wordpress.component'
import {TesoMapComponent} from './content/teso-map/teso-map.component'
import {EventComponent} from './content/event/event.component'
import {WuzaComponent} from './content/wuza/wuza.component'
import {IpaComponent} from './content/ipa/ipa.component'
import {BuildToolComponent} from './content/build-tool/build-tool.component'
import {IbcComponent} from './content/ibc/ibc.component'
import {JsMarioComponent} from './content/js-mario/js-mario.component'
import {MindstepsComponent} from './content/mindsteps/mindsteps.component'
import {TaxviewerComponent} from './content/taxviewer/taxviewer.component'

export interface WuzaProjectRoute {
  link?: string
  template?: Type<any> | null
}

export interface WuzaProject extends WuzaProjectRoute{
  title: string
  time: string
  content: string
}

export const projectRoutes: () => WuzaProjectRoute[] = () => projects
  ?.filter((p) => p.template)
  ?.map((p) => ({
      template: p.template,
      link: p.link
    })) ?? []

export const projects: WuzaProject[] = [
  {
    title: 'TaxViewer', time: '2024 bis 2025',
    template: TaxviewerComponent, link: 'taxviewer',
    content: 'CAS «Interaction Design»: Entwicklung eines UX-Frameworks für ' +
      'ECMind – angewendet auf die Neugestaltung des webbasierten TaxViewer.'
  },

  {
    title: 'Mindsteps', time: '2023 bis 2024',
    template: MindstepsComponent, link: 'mindsteps',
    content: 'Nutzerforschung mit Schüler:innen: Wie Mindsteps ihren Lernprozess unterstützt – und wie ' +
      'die Plattform gezielt verbessert werden kann. Eine Arbeit aus dem CAS «User Research & Visioning»'
  },

  {
    title: 'Accessibility', time: 'November 2023',
    content: 'Barrierefreier Zugang ist insbesondere im Web wichtig. ' +
      'Durch eine Weiterbildung konnte ich meine Kenntnisse in diesem Bereich vertiefen, welche ich insbesondere ' +
      'bei den aktuellen Firmenprojekten einsetzen kann.'
  },

  {
    title: 'Mentor', time: 'seit August 2023',
    content: 'Beim Thurgauer Gewerbeverband bin ich ehrenamtlich als Mentor tätig ' +
      'und begleite Jugendliche bei der Suche nach einer Lehrstelle.'
  },

  {
    title: 'W-JAX', time: 'November 2022',
    content: 'Ich durfte erste Erfahrungen mit den Paint und Properties & Values APIs von CSS Houdini sammeln.'
  },

  {
    title: 'CSS Animations', time: 'Januar 2022',
    content: 'Durch eine Weiterbildung konnte ich mit im Bereich der CSS Animations vertiefen.'
  },

  {
    template: SaComponent, link: 'sa', title: 'Dafny Language Server', time: 'Sep. bis Dez. 2019',
    content: 'In unserer Studienarbeit wurde der Dafny Language Server in C# neu implementiert. ' +
      'Das in TypeScript geschriebene Visual Studio Code Plugin, welches die Sprache Dafny unterstützt, ' +
      'kommuniziert über das LSP direkt mit dem Language Server.'
  },

  {
    title: 'iOS AppQuest als Coach', time: 'Sep. bis Dez. 2019',
    content: 'Nachdem ich im 2014 Teilnehmer an der AppQuest war, bin ich nun selbst ' +
      'als Coach für die beiden diesjährigen iOS-Teams verantwortlich.'
  },

  {
    template: AntenneComponent, link: 'antenne', title: 'Newsfeed Antenne Märstetten', time: 'Juni 2019',
    content: 'Mittels React wurde ein Newsticker für die Bewohner von Märstetten implementiert.'
  },

  {
    template: EasymechComponent, link: 'easymech',
    title: 'EasyMech',
    time: 'seit Februar 2019',
    content: 'Für die Firma DuKoStapler wurde ein Maschinenverwaltungstool programmiert. ' +
      'Das Frontend wurde mit React realisiert und das Backend mit C# in ASP.NET.'
  },

  {
    template: RockTheRingComponent, link: 'rock_the_ring',
    title: 'Rock the Ring',
    time: 'Februar bis Mai 2019',
    content: 'Für das Festival «Rock the Ring» wurde eine neue, moderne Website erstellt. ' +
      'Zusätzlich wurden moderne Lösungsansätze mit nativen ' +
      'Smartphone-Funktionen (wie Ticketkäufe per Siri und Apple Pay) mittels React Native entworfen.'
  },

  {
    title: 'Studentenportal', time: 'seit Mai 2018',
    content: 'Seit Mai administriere ich das Studentenportal.ch der HSR und entwickle es weiter. ' +
      'Es basiert auf dem Django Web Framework, welches in Python geschrieben wurde.'
  },

  {
    template: WgAppComponent, link: 'wg-app',
    title: 'WG App',
    time: 'seit Mai 2018',
    content: 'Eine Meteor Applikation für die Organisation des WG-Lebens. ' +
      'Dazu gehören eine Einkaufsliste, Eventveranstaltungen und Kochplanung.'
  },

  {
    title: 'VBA in Excel', time: 'Januar 2018',
    content: 'Für eine Abteilung der Credit Suisse wurde ein Makro geschrieben, ' +
      'welche automatisch Gewinn- und Verluststatistiken im Hintergrund erfasst.'
  },

  {
    template: SbbComponent, link: 'sbb',
    title: 'SBB Fahrplan',
    time: 'Oktober 2017',
    content: 'Mittels der SBB API wurde eine kleine, animierte Übersicht der nächsten ' +
      'Bus-Verbindungen von der WG zur HSR und zurück erstellt. Ideal, um sie mit beispielsweise ' +
      'einem Raspberry Pi auf einem Display anzeigen zu lassen.'
  },

  {
    title: 'KongressApp', time: 'September 2017',
    content: 'Eine Applikation, welche in Meteor geschrieben wurde. Sie übernimmt den Q&A ' +
      'Teil während einer Keynote. Teilnehmer können so einfach und unkompliziert Fragen einreichen, ' +
      'welche von einer Moderation live aufgeschaltet werden können.'
  },

  {
    title: 'Meteor', time: 'seit August 2017',
    content: 'Erste Applikationen mit dem Full-Stack JavaScript-Framework sowie Pläne, ' +
      'gewisse WUZA-Projekte (wie WUZAlife) mit Meteor neu zu schreiben.'
  },

  {
    template: TesoAddonsComponent, link: 'teso-addons',
    title: 'TESO Add-ons',
    time: 'Februar 2017',
    content: 'Mittels LUA wurden mehrere Add-ons realisiert. So wurden die LUA-Kentnisse ' +
      'gefestigt und ausgebaut, aber auch die API von TESO habe ich besser kennengelernt ' +
      'und so allgemein weitere Erfahrung in der Add-on-Entwicklung gesammelt.'
  },

  {
    template: WordpressComponent, link: 'wordpress', title: 'WordPress Sites', time: 'seit Ende 2016',
    content: 'Via BeeBase wurden mehrere Webauftritte von Kunden auf eine moderne Art umgesetzt.'
  },

  {
    template: TesoMapComponent, link: 'teso-map',
    title: 'TESO Map',
    time: 'Dezember 2016',
    content: 'Ein Kleinprojekt, bei welchem ich mich mit HTML5 Canvas ' +
      'animationstechnisch etwas ausgetobt habe. Dank Ajax und dem PS4-Browser-Support ' +
      'hat das Projekt aber auch einen praktischen Nutzen.'
  },

  {
    template: EventComponent, link: 'event',
    title: 'Eventorganisation',
    time: 'Februar 2016',
    content: 'Klassische Postkarten als Einladungen für Events zu verschicken, ' +
      'ist nicht mehr zeitgemäss. Ein paar Codezeilen und die Webversion der ' +
      'interaktiven Einladung inklusive Ablaufsprogramm ist per Link für alle Gäste publiziert.'
  },

  {
    template: WuzaComponent, link: 'wuza',
    title: 'WUZA - das Webprojekt',
    time: 'seit Ende 2015',
    content: 'Um neue Bereiche zu erlernen, Bekanntes zu vertiefen und ' +
      'Erschaffenes zu publizieren, wurde das Projekt WUZA ins Rollen gebracht.'
  },

  {
    template: IpaComponent, link: 'ipa', title: 'Meine IPA', time: 'März 2015',
    content: 'Ende Februar bis anfangs März absolvierte ich meine individuelle praktische Arbeit - kurz IPA. ' +
      'Mein Thema war der vollautomatische Registrierungsprozess für die Cloud ERP-Lösung "SQL-Ledger".'
  },

  {
    template: BuildToolComponent, link: 'build-tool', time: 'Oktober 2014 bis Januar 2015',
    title: 'Build Tool - das WBB Plugin',
    content: 'WBB steht für "WoltLab Burning Board" und ist eine ' +
      'verbreitete Forensoftware für Communities. Dafür habe ich ein ' +
      'kleines Tool - einst für Gw2, derweilen für ESO - in PHP geschrieben.'
  },

  {
    template: IbcComponent, link: 'ibc',
    title: 'IBC Switzerland Webauftritt',
    time: 'Sommer 2014',
    content: 'Ein bis heute kleines aber feines Projekt, welches einst eventuell wieder aufgefasst wird: ' +
      'In kürzester Zeit wurde spontan eine Internetpräsenz erschaffen.'
  },

  {
    template: JsMarioComponent, link: 'js-mario',
    title: 'JavaScript Mario',
    time: '',
    content: 'Der kleine Protagonist wird von Bomben bedroht!'
  },
  {
    title: 'iOS AppQuest und FlappyBird',
    time: 'im Jahr 2014',
    content: 'Die ersten Schritte in Objective-C und Swift.'
  },
  {
    title: 'SRF Migrationsprojekt', time: 'Sommer 2013',
    content: 'Die drei Jahrgangsbesten der Berufsschule in meiner ' +
      'Ausbildungszeit, wurden für ein Migrationsprojekt von der ' +
      'Schweizerischen Radio- und Fernsehgesellschaft (SRG SSR) angeworben. ' +
      'Über mehrere Samstage hinweg durften wir an dem Projekt ' +
      'teilnehmen und wertvolle Erfahrungen gewinnen.'
  },
]
