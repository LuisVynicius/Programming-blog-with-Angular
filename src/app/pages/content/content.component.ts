import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  photoCover: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";

  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }
  
  setValuesToComponent(id: string|null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0];
    
    console.log(result);

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
