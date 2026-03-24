import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NewsItem {
  title: string;
  date: Date;
  summary: string;
  image?: string;
  link?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  newsList: NewsItem[] = [
    {
      title: 'Assemblée Générale Annuelle',
      date: new Date('2026-03-10'),
      summary: 'Retour sur notre AG annuelle avec bilan, nouveaux projets et moments forts partagés entre membres.',
      image: '/assets/images/IMG-20260323-WA0210.jpg',
      link: '#'
    },
    {
      title: 'Atelier Carrières & Géosciences',
      date: new Date('2026-02-18'),
      summary: 'Un atelier interactif pour booster les compétences professionnelles de nos membres, animé par des experts du secteur.',
      image: '/assets/images/IMG-20260323-WA0212.jpg',
      link: '#'
    },
    {
      title: 'GEOFA solidaire : collecte pour les étudiants',
      date: new Date('2026-01-25'),
      summary: 'Une opération de solidarité réussie pour soutenir les étudiants en difficulté. Merci à tous les donateurs !',
      image: '/assets/images/IMG-20260323-WA0213.jpg',
      link: '#'
    }
  ];
}
