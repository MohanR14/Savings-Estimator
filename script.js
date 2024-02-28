function exp() {
    const Salary = Number(document.getElementById("salary").value);
    const Petrol = Number(document.getElementById("petrol").value);
    const Gas = Number(document.getElementById("gas").value);
    const Rent = Number(document.getElementById("rent").value);
    const Hospital = Number(document.getElementById("hos").value);
    const Shopping = Number(document.getElementById("shopping").value);

    const expenses = Petrol + Gas + Rent + Hospital + Shopping;
    const totRemaining = Salary - expenses;
    document.getElementById("result").innerHTML = `After all Expenses the Remaining Amount is ₹ ${totRemaining}`;
}