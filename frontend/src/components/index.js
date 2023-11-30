import React,{useState} from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Details from "./Details";

const Index = () => {
    const [fShortlisted,setFShortlisted] = useState(false);
    const allData = [
        {
            id : 0,
            name : "Epic ",
            detailDis : "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            projects : 57,
            years : 8,
            price : "$$",
            phone1 : 9978585858,
            phone2 : 9875647894,
            star : 4.5,
            shortlisted : 0,
        },
        {
            id : 1,
            name : "studio D3",
            detailDis : "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            projects : 57,
            years : 8,
            price : "$$",
            phone1 : 9978585858,
            phone2 : 9875647894,
            star : 3.5,
            shortlisted: 0,
        },
        {
            id : 2,
            name : "studio A1",
            detailDis : "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            projects : 21,
            years : 8,
            price : "$$",
            phone1 : 9978585858,
            phone2 : 9875647894,
            star : 1.5,
            shortlisted: 0,
        },
        {
            id : 3,
            name : "studio A2",
            detailDis : "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            projects : 5,
            years : 8,
            price : "$$",
            phone1 : 9978585858,
            phone2 : 9875647894,
            star : 4,
            shortlisted: 0,
        },
    ];
    const [data,setData] = useState(allData);
    return (
        <>
            <Header />
            <NavBar fShortlisted={fShortlisted} setFShortlisted={setFShortlisted} />
            <Details fShortlisted={fShortlisted} data={data} setData={setData} allData={allData}/>
        </>
    );
};

export default Index;
