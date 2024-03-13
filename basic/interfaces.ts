interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summaryFunc(): string;
}
const oldCivic = {
  name: "civic",
  year: 200,
  broken: true,
  summaryFunc: (): string => {
    return "";
  },
};
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);
