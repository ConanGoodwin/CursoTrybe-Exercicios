class ReportAnalyzer:
    def __init__(self, loader) -> None:
        self.loader = loader

    def average(self):
        data = self.loader.load_data()
        total = sum(order["final_price"] for order in data)
        return total / len(data)


class ReportLoader:
    def __init__(self) -> None:
        self.headers = ["id", "date", "final_price"]
        self.rows = [
            [1337, "2020-11-20", 2350.5],
            [1338, "2020-11-21", 4800.5],
        ]


gt3000 = ReportLoader()
print(gt3000.headers)
print(gt3000.rows[0])


class Gt3000Adapter:
    def __init__(self, loader) -> None:
        self.loader = loader

    def load_data(self):
        data = []
        for row in self.loader.rows:
            data.append(dict(zip(self.loader.headers, row)))
        return data


loader = Gt3000Adapter(gt3000)
analyzer = ReportAnalyzer(loader)
print(analyzer.average())
