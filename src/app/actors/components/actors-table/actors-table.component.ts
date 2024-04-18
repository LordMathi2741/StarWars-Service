import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ApiFakeService} from "../../service/api-fake.service";
import {Actor} from "../../model/actor.entity";

@Component({
  selector: 'app-actors-table',
  imports: [MatTableModule],
  standalone: true,
  templateUrl: './actors-table.component.html',
  styleUrl: './actors-table.component.css'
})
export class ActorsTableComponent implements OnInit {
     dataSource = new MatTableDataSource();
     actors: Actor[] = [];
     actorData: Actor;
     displayedColumns: string[] = ['name', 'mass', 'gender', 'skin_color','birth_year' ]
      @ViewChild(MatSort, {static: true}) sort!: MatSort;
      constructor(private actorsService: ApiFakeService) {
        this.actorData = {} as Actor;
      }
      ngOnInit(): void {
        this.getActors();
      }
      getActors() {
        this.actorsService.getAll().subscribe((data:any) => {
            data.results.forEach((actor: any) => {
                this.actorData = new Actor(actor.name, actor.mass, actor.gender, actor.skin_color,actor.birth_year);
                this.actors.push(this.actorData);
            });
            this.dataSource.data = this.actors;
        });
    }

}
