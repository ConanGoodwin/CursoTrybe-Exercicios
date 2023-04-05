class DbSimulator:
    def __init__(self) -> None:
        self.person_table = [
            {"name": "Morgana", "age": "22"},
            {"name": "Sarah", "age": "24"},
            {"name": "Will", "age": "33"},
            {"name": "Rick", "age": "23"},
            {"name": "John", "age": "22"},
            {"name": "Peter", "age": "35"},
            {"name": "Groove", "age": "48"},
            {"name": "Sam", "age": "19"},
        ]

    def get(self, query, page, table):
        per_page = 2

        if query == "select * from person":
            first = (page * per_page) - per_page
            last = page * per_page
            return eval(f"self.{table}[first:last]")

    def __iter__(self):
        return DatabaseInterator(self, "select * from person", "person_table")


class DatabaseInterable:
    def __init__(self, db, query, table) -> None:
        self.db = db
        self.query = query
        self.table = table

    def __iter__(self):
        return DatabaseInterator(self.db, self.query, self.table)


class DatabaseInterator:
    def __init__(self, db, query, table) -> None:
        self.db = db
        self.quey = query
        self.table = table
        self.current_page = 1

    def get_page(self, page):
        return self.db.get(self.quey, page, self.table)

    def __next__(self):
        data = self.get_page(page=self.current_page)

        if not data:
            raise StopIteration

        print("")
        print(f"pagina {self.current_page}")
        self.current_page += 1
        return data


record_paginator = DatabaseInterable(
    DbSimulator(), "select * from person", "person_table"
)

for page in record_paginator:
    for record in page:
        print(record["name"])

banco = DbSimulator()
for page in banco:
    for record in page:
        print(record["name"])
