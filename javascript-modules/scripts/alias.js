const company = "Programmer Zaman Now";

function sum(first, second) {
  return first + second;
}

class Company {}

// Alias di export
// export { company as perusahaan, sum as total, Company as Perusahaan };

// Alias di import
export { company, sum, Company };
