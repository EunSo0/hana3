console.log("*****************************");
Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return this[0];
    },
  },
  last: {
    get: function () {
      return this[this.length - 1];
      // return this.slice(-1)[0];
    },
  },
});

Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((item) => item[prop]))];
};
Array.prototype.filterBy = function (prop, value) {
  return this.filter((item) => item[prop] === value);
};

Array.prototype.sortBy = function (prop, direction = "asc") {
  const flag = direction.toLowerCase() === "asc" ? 1 : -1;

  // return [...this].toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
  return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);

  // return this.toSorted((a, b) => {
  //   if (typeof a[prop] === 'string') return a[prop].localeCompare(b[prop]);

  //   return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
  // });
};

Array.prototype.findBy = function (prop, value) {
  return this.find((item) => item[prop] === value);
};

// const hong = { id: 1, name: "Hong", dept: "HR" };
// const kim = { id: 2, name: "Kim", dept: "Server" };
// const lee = { id: 3, name: "Lee", dept: "Front" };
// const park = { id: 4, name: "Park", dept: "HR" };
// const ko = { id: 7, name: "Ko", dept: "Server" };
// const loon = { id: 6, name: "Loon", dept: "Sales" };
// const choi = { id: 5, name: "Choi", dept: "Front" };
// const users = [hong, kim, lee, park, ko, loon, choi];
// users.uniqueBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]

// const uniqDepts = users.uniqueBy("dept");
// console.log("unique", uniqDepts);
// const hrUsers = users.filterBy("dept", "HR");
// console.log("filter", hrUsers);

// console.log("sort", users.sortBy("name"));
// console.log("sort-desc", users.sortBy("id", "desc"));

// console.log("find", users.findBy("name", "Hong"));
