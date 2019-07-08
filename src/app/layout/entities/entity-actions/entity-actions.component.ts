import { Component, OnInit } from '@angular/core';
import { EntityActionsService } from './entity-actions.service';
import { TreeNode } from 'primeng/api';
import { OwnersService } from '../../owners/owners.service';

import { environments } from '../../../../environments/environments2';

@Component({
  selector: 'app-entity-actions',
  templateUrl: './entity-actions.component.html',
  styleUrls: ['./entity-actions.component.scss']
})

export class EntityActionsComponent implements OnInit {

  hierarchy: TreeNode[];
  public owners = [];
  public model = {
    asset: {
      name: "",
      type: "",
      job: "",
      publicKey: ""
    },
    owner: {
      publicKey: "",
      privateKey: "",
      name: ""
    },
    data: ""
  };
  public transfer = {
    asset: {
      name: "",
      type: "",
      job: "",
      publicKey: ""
    },
    dest: {
      publicKey: "",
      privateKey: "",
      name: ""
    },
    data: "",
    ownerPrivateKey: ""
  };
  value;
  tmp = [];
  reestructured = {};

  constructor(private entityActionsService: EntityActionsService, private ownersService: OwnersService) { }

  ngOnInit() {

    this.getEntity(environments.develop.SERVER.USERNAME).subscribe(data => {
      this.owners = JSON.parse(data["_body"])[0].owners;
    }
    );

    this.getHierarchy(environments.develop.SERVER.USERNAME).subscribe(data => {
      JSON.parse(data._body).map(a => this.tmp.push({ name: a.transactionHistory[0].asset.data.schema.name, owner: a.data.ownerName }))
      this.hierarchy = [{ label: environments.develop.SERVER.USERNAME, children: [] }]
      // Reestructuracion
      for (let item in this.tmp) {
        if (!(this.tmp[item].owner in this.reestructured)) {
          this.reestructured[this.tmp[item].owner] = []
          this.reestructured[this.tmp[item].owner].push(this.tmp[item].name)
        }
        else {
          this.reestructured[this.tmp[item].owner].push(this.tmp[item].name)
        }
      }
      // Creación de la jerarquía
      for (let item in this.reestructured["Test"]) {
        if (this.reestructured["Test"][item] !== "Test") {
          this.hierarchy[0].children.push({ label: this.reestructured["Test"][item], children: this.findChild(this.reestructured["Test"][item], this.reestructured) });
        }
      }
    });
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

  transferAsset() {
    return this.entityActionsService.transferAsset(this.transfer.asset.name, this.transfer.dest.publicKey, this.transfer.data, this.transfer.dest.name, this.transfer.ownerPrivateKey);
  }

  getEntity(username) {
    return this.ownersService.getOwner(username);
  }

  createAsset() {
    return this.entityActionsService.createAsset(environments.develop.SERVER.USERNAME, { name: this.model.asset.name, type: this.model.asset.type, job: this.model.asset.job }, this.model.asset.publicKey, { publicKey: this.model.owner.publicKey, privateKey: this.model.owner.privateKey }, this.model.owner.name, this.model.data);
  }

  getHierarchy(username) {
    return this.entityActionsService.getHierarchy(username);
  }
}

