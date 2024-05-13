import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public iconsArray = signal([
    { src: 'assets/icons/knowledge/java.svg', alt: 'Java' },
    { src: 'assets/icons/knowledge/springboot.svg', alt: 'Spring Boot' },
    { src: 'assets/icons/knowledge/sql.svg', alt: 'My SQL' },
    { src: 'assets/icons/knowledge/html.svg', alt: 'HTML' },
    { src: 'assets/icons/knowledge/css.svg', alt: 'CSS' },
    { src: 'assets/icons/knowledge/javascript.svg', alt: 'Java Script' },
    { src: 'assets/icons/knowledge/angular.svg', alt: 'Angular' },
    { src: 'assets/icons/knowledge/github.svg', alt: 'GitHub' },
  ]);
}
