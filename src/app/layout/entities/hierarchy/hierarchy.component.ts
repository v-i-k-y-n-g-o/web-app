import { Component, OnInit } from '@angular/core';
import { HierarchyService } from './hierarchy.service';
import { TreeNode } from 'primeng/api';
import { OwnersService } from '../../owners/owners.service';
import { environments } from '../../../../environments/environments2';


@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  hierarchy: TreeNode[];
  reestructured = {};
  tmp = [];

  constructor(private hierarchyService: HierarchyService, private ownersService: OwnersService) { }

  ngOnInit() {

    this.hierarchy = [{
      label: 'Diego',
      children: [
          {
              label: 'Raspberry Pi'
          }
      ]
  }];
    // this.getHierarchy(environments.develop.SERVER.USERNAME).subscribe(data => {
    //   JSON.parse(data._body).map(a => this.tmp.push({ name: a.transactionHistory[0].asset.data.schema.name, owner: a.data.ownerName }))
    //   this.hierarchy = [{ label: environments.develop.SERVER.USERNAME, children: [] }]
    //   // Reestructuracion
    //   for (let item in this.tmp) {
    //     if (!(this.tmp[item].owner in this.reestructured)) {
    //       this.reestructured[this.tmp[item].owner] = []
    //       this.reestructured[this.tmp[item].owner].push(this.tmp[item].name)
    //     }
    //     else {
    //       this.reestructured[this.tmp[item].owner].push(this.tmp[item].name)
    //     }
    //   }
    //   // Creación de la jerarquía
    //   for (let item in this.reestructured["Test"]) {
    //     if (this.reestructured["Test"][item] !== "Test") {
    //       this.hierarchy[0].children.push({ label: this.reestructured["Test"][item], children: this.findChild(this.reestructured["Test"][item], this.reestructured) });
    //     }
    //   }
    // });

  }

  findChild(father, tree) {
    if (tree[father] !== undefined) {
      for (let child in tree[father]) {
        return [{ label: tree[father][child], children: this.findChild(tree[father][child], tree) }];
      }
    }
    else {
      return []
    }
  }

  getHierarchy(username) {
    return this.hierarchyService.getHierarchy(username);
  }

}
