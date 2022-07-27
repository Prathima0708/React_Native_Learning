import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export function init() {
  database.transaction((tx) => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS places`);
  });
}
