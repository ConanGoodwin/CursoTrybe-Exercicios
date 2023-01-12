class Tv {
  private brand: string;
  private size: number;
  private resolution: number;
  private connections: string;
  private connectedTo?: boolean;

  constructor(brand: string, size: number, resolution: number, connections: string) {
    this.brand = brand;
    this.size = size;
    this.resolution= resolution;
    this.connections = connections;
  }

  public turnOn() {
    return `brand: ${this.brand}, size: ${this.size}, resolution: ${this.resolution}, connections: ${this.connections}`
  }
}

const minhaTv = new Tv('mike', 10, 140, 'sóuma');

console.log(minhaTv.turnOn());
