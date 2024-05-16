
let employees = []

const fire=(index)=>{
    employees.splice(index,1);
    uimaker()
}

let Totalemp=0;
let Totalsalary=0;
const uimaker = () => {

    document.getElementById("tbody").innerHTML = ""

    employees.map((ele) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.name
        let td2 = document.createElement("td")
        td2.innerHTML = ele.job
        let td3 = document.createElement("td")
        td3.innerHTML = ele.department
        let td4 = document.createElement("td")
        td4.innerHTML = ele.salary
        let td5 = document.createElement("td")
        td5.innerHTML = ele.experience
        let td6 = document.createElement("td")
        td6.innerHTML = ele.contact
        console.log("amee");

        let td7=document.createElement('td7')
        if(ele.experience>5){
            td7.innerHTML="senior"
        }
        else{
            td7.innerHTML="Junior"
        }

        let td8 = document.createElement('td')
        td8.innerHTML = "delete"
        td8.addEventListener("click",()=>fire(i));

        tr.append(td1, td2, td3, td4, td5, td6, td7,td8)

        document.getElementById("tbody").append(tr);

        Totalemp++;
        Totalsalary+=ele.slaray;
    });

    Totalemp=0;
    Totalsalary=0;

}


const handledata = (e) => {
    e.preventDefault();

    let emp = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value,
        experience: document.getElementById("experience").value,
        contact: document.getElementById("contact").value
    }

    employees.push(emp);
    uimaker();

}


document.getElementById("totalemp").append=Totalemp;
document.getElementById("totalsalary").append=Totalsalary;

document.getElementById("data").addEventListener("submit", handledata);

document.getElementById("deleteall").addEventListener("click", () => {
    document.getElementById("tbody").innerHTML = ""
    employees = []
})