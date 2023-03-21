import { Model } from "@vuex-orm/core";

export class Block extends Model {
  static entity = "blocks";

  static fields() {
    return {
      id: this.string(""),
      x: this.number(0),
      y: this.number(0),
    };
  }

  get top() {
    return {
      x: this.x + 75,
      y: this.y,
    };
  }

  get left() {
    return {
      x: this.x,
      y: this.y + 75,
    };
  }

  get right() {
    return {
      x: this.x + 150,
      y: this.y + 75,
    };
  }

  get bottom() {
    return {
      x: this.x + 75,
      y: this.y + 150,
    };
  }

  id!: string;
  x!: number;
  y!: number;
}
