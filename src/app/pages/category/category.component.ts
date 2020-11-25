import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";

import { CropService } from "../crop.service";

@Component({
  selector: "my-category",
  templateUrl: "./category.component.html"
})
export class CategoryComponent implements OnInit {
  category$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private cropService: CropService,

  ) { }

  onChange(event, index, item) {
    item.checked = !item.checked;
    console.log(index, event, item);
  }
  ngOnInit(): void {
    const category = this.route.snapshot.params.category;

    this.category$ = this.cropService
      .getCrop(category)
      .pipe(pluck("subCategory"));
  }

}
