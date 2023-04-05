from abc import ABC, abstractclassmethod


class BancoStrategy(ABC):
    @abstractclassmethod
    def debitar(cls):
        raise NotImplementedError
