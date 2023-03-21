import { Database } from "@vuex-orm/core";
import { Block } from "@/store/models/Block";
import { Line } from "@/store/models/Line";

const database = new Database();

database.register(Block);
database.register(Line);

export default database;
