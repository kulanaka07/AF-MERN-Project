// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AnimalBlog from "./Components/AnimalBlog/AnimalBlog";
import AllBlogsStaff from "./Components/AnimalBlog/AllBlogsStaff";
import UpdateBlog from "./Components/AnimalBlog/UpdateBlog";

import Animal from "./Components/AnimalProduction/Animal";
import Beef from "./Components/AnimalProduction/Beef";
import ViewBeef from "./Components/AnimalProduction/ViewBeef";
import BeefDetails from "./Components/AnimalProduction/BeefDetails";
import UpdateBeef from "./Components/AnimalProduction/UpdateBeef";
import Test from "./Components/AnimalProduction/Test";
import Milk from "./Components/AnimalProduction/Milk";
import Egg from "./Components/AnimalProduction/Egg";
import Pork from "./Components/AnimalProduction/Pork";
import Chicken from "./Components/AnimalProduction/Chicken";
import GoatMilk from "./Components/AnimalProduction/GoatMilk";
import Goat from "./Components/AnimalProduction/Goat";
import APNavbar from "./Components/AnimalProduction/APNavbar";
import Footer from "./Components/Footer";

import LandingPageGrassroot from "./Components/LandingPageGrassroot";
import LandingPageStaff from "./Components/LandinPageStaff";
import NavLandingStaff from "./Components/NavLandingStaff";

import SelectionPage from "./Components/SelectionPage";
import AnimalDataTable from "./Components/AnimalDataTable";
import AgriDataTable from "./Components/AgriDataTable";
import AnimalGrassNavbar from "./Components/AnimalGrassNavbar";
import AgriGrassNavbar from "./Components/AgriBlog/AgriGrassNavbar";
import AnimalServices from "./Components/AnimalServices";
import SelectionPageStaff from "./Components/SelectionPageStaff";
import AnimalStaffNavbar from "./Components/AnimalBlog/AnimalStaffNavbar";
import AgriStaffNavbar from "./Components/AgriBlog/AgriStaffNavbar";
import ImageGridAgri from "./Components/AgriBlog/ImageGridAgri";
import AgriBlogForm from "./Components/AgriBlog/AgriBlogForm";
import AgriBlog from "./Components/AgriBlog/AgriBlog";
import UpdateAgriBlog from "./Components/AgriBlog/UpdateAgriBlog";
import ImageGridAgriUser from "./Components/AgriBlog/ImageGridAgriUser";
import NavLandingGrass from "./Components/NavLandingGrass";
import AgriUserNav from "./Components/AgriBlog/AgriUserNav";
import AnimalUserNav from "./Components/AnimalBlog/AnimalUserNav";
import AllAnimalBlogs from "./Components/AnimalBlog/AllAnimalBlogs";
import AnimalBlogForm from "./Components/AnimalBlog/AnimalBlogForm";

//Edited by kulanaka
import ViewRice from "./Components/AgricultureProduction/ViewRice";
import AddRice from "./Components/AgricultureProduction/AddRice";
import RiceDetails from "./Components/AgricultureProduction/RiceDetails";
import ViewVegi from "./Components/AgricultureProduction/ViewVegi";
import VegiDetails from "./Components/AgricultureProduction/VegiDetails";
import AddVegi from "./Components/AgricultureProduction/AddVegi";
import UpdateVegi from "./Components/AgricultureProduction/UpdateVegi";
import UpdateRice from "./Components/AgricultureProduction/UpdateRice";
import ClientViewVegi from "./Components/AgricultureProduction/ClientViewVegi";
import ClientVegiDetails from "./Components/AgricultureProduction/ClientVegiDetails";
import ClientViewRice from "./Components/AgricultureProduction/ClientViewRice";
import ClientRiceDetails from "./Components/AgricultureProduction/ClientRiceDetails";


import Login from "./Components/Login";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route path="/landingStaff" element={<><NavLandingStaff /><LandingPageStaff /></>} />
        <Route path="/landingGrassroot" element={<><NavLandingGrass /><LandingPageGrassroot /></>} />
        <Route path="/selectionPage" element={<SelectionPage />} />
        <Route path="/AnimalDataTable" element={<><AnimalGrassNavbar /><AnimalDataTable /></>} />
        <Route path="/agriTable" element={<><AgriGrassNavbar /><AgriDataTable /></>} />
        <Route path="/animalServices" element={<><AnimalStaffNavbar /><AnimalServices /></>} />
        <Route path="/home" element={<><Home /><Footer /></>} />
        <Route path="/aboutus" element={<><AboutUs /><Footer /></>} />
        <Route path="/landingStaff" element={<><NavLandingStaff /><LandingPageStaff /></>} />
        <Route path="/landingGrassroot" element={<><NavLandingGrass /><LandingPageGrassroot /></>} />
        <Route path="/selectionPage" element={<SelectionPage />} />
        <Route path="/AnimalDataTable" element={<><AnimalGrassNavbar /><AnimalDataTable /></>} />
        <Route path="/agriTable" element={<><AgriGrassNavbar /><AgriDataTable /></>} />
        <Route path="/animalServices" element={<><AnimalStaffNavbar /><AnimalServices /></>} />
        <Route path="/" element={<Animal />} />
        <Route path="/selectionStaff" element={<SelectionPageStaff />} />
        <Route path="/agriForm" element={<><AgriBlogForm /><Footer/></>} />
        <Route
          path="/agriServices"
          element={
            <>
              <AgriStaffNavbar />
              <ImageGridAgri /> <SelectionPageStaff />
              <Footer />{" "}
            </>
          }
        ></Route>
        <Route
          path="/agriArticle"
          element={
            <>
              <AgriBlog />
              <Footer />
            </>
          }
        />
        <Route
          path="/agriArticleEdit"
          element={
            <>
              <UpdateAgriBlog /> <Footer />{" "}
            </>
          }
        />
        <Route
          path="/agriUser"
          element={
            <>
              <AgriUserNav /> <ImageGridAgriUser />
              <SelectionPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/addanimalblog"
          element={
            <>
              <AnimalUserNav />
              <AnimalBlogForm />
              <SelectionPage />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/allanimblogs"
          element={
            <>
              <AnimalUserNav />
              <AllAnimalBlogs />
              <SelectionPage />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/animalArticle" element={<AnimalBlog />}></Route>
        <Route
          path="/allBlogStaff"
          element={
            <>
              <AnimalStaffNavbar />
              <AllBlogsStaff />
              <SelectionPageStaff />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/blogUpdate"
          element={
            <>
              <UpdateBlog />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/" element={<Animal />}></Route>

        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route
          path="/milk"
          element={
            <>
              {" "}
              <Milk /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/landingStaff"
          element={
            <>
              
              <NavLandingStaff /> <LandingPageStaff />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/landingGrassroot"
          element={
            <>
              {" "}
              <LandingPageGrassroot /> <Footer />{" "}
            </>
          }
        ></Route>
        <Route path="/selectionPage" element={<SelectionPage />}></Route>
        <Route
          path="/AnimalDataTable"
          element={
            <>
              {" "}
              <AnimalGrassNavbar /> <AnimalDataTable />{" "}
            </>
          }
        />
        <Route
          path="/agriTable"
          element={
            <>
              <AgriGrassNavbar /> <AgriDataTable />
            </>
          }
        />

        <Route path="/" element={<Animal />}></Route>
        <Route
          path="/beef"
          element={
            <>
              {" "}
              <Beef /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route path="/vbeef" element={<><ViewBeef/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/upbeef" element={<><UpdateBeef/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route
          path="/milk"
          element={
            <>
              {" "}
              <Milk /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/egg"
          element={
            <>
              {" "}
              <Egg /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/pork"
          element={
            <>
              {" "}
              <Pork /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/chicken"
          element={
            <>
              {" "}
              <Chicken /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/goatmilk"
          element={
            <>
              {" "}
              <GoatMilk /> <APNavbar /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/goat"
          element={
            <>
              {" "}
              <Goat /> <APNavbar /> <Footer />
            </>
          }
        ></Route>

        <Route
          path="/landingStaff"
          element={
            <>
              {" "}
              <NavLandingStaff /> <LandingPageStaff /> <Footer />{" "}
            </>
          }
        ></Route>
        <Route
          path="/landingGrassroot"
          element={
            <>
              {" "}
              <LandingPageGrassroot /> <Footer />{" "}
            </>
          }
        ></Route>
        <Route path="/selectionPage" element={<SelectionPage />}></Route>
        <Route
          path="/AnimalDataTable"
          element={
            <>
              {" "}
              <AnimalGrassNavbar /> <AnimalDataTable />{" "}
            </>
          }
        />
        <Route
          path="/agriTable"
          element={
            <>
              <AgriGrassNavbar /> <AgriDataTable />
            </>
          }
        />
        {/*Edited by kuls */}
        <Route path="/vvegi" element={<><ViewVegi/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/svegi" element={<VegiDetails />} />
        <Route path="/addvegi" element={<><AddVegi /><APNavbar /><Footer /></>} />
        <Route path="/upvegi" element={<><UpdateVegi /><APNavbar /><Footer /></>} />
        <Route path="/vrice" element={<><ViewRice/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/addrice" element={<><AddRice /><APNavbar /><Footer /></>} />
        <Route path="/srice" element={<RiceDetails />} />
        <Route path="/uprice" element={<><UpdateRice/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/clientvegi" element={<><ClientViewVegi/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/clientsvegi" element={<ClientVegiDetails />} />
        <Route path="/clientrice" element={<><ClientViewRice/> <APNavbar /> <Footer /> </> }></Route>
        <Route path="/clientsrice" element={<ClientRiceDetails />} />

        
        <Route path="/agriForm" element={<><AgriBlogForm /><Footer /></>} />
        <Route path="/agriServices" element={<><AgriStaffNavbar /><ImageGridAgri /><SelectionPageStaff /><Footer /></>} />
        <Route path="/agriArticle" element={<><AgriBlog /><Footer /></>} />
        <Route path="/agriArticleEdit" element={<><UpdateAgriBlog /><Footer /></>} />
        <Route path="/agriUser" element={<><AgriUserNav /><ImageGridAgriUser /><SelectionPage /><Footer /></>} />
        <Route path="/addanimalblog" element={<><AnimalUserNav /><AnimalBlogForm /><SelectionPage /><Footer /></>} />
        <Route path="/allanimblogs" element={<><AnimalUserNav /><AllAnimalBlogs /><SelectionPage /><Footer /></>} />
        <Route path="/animalArticle" element={<AnimalBlog />} />
        <Route path="/allBlogStaff" element={<><AnimalStaffNavbar /><AllBlogsStaff /><SelectionPageStaff /><Footer /></>} />
        <Route path="/blogUpdate" element={<><UpdateBlog /><Footer /></>} />
        <Route path="/" element={<Animal />} />
        <Route path="/test" element={<Test />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/milk" element={<><Milk /><APNavbar /><Footer /></>} />
        <Route path="/beef" element={<><Beef /><APNavbar /><Footer /></>} />
        <Route path="/singlebeef" element={<BeefDetails />} />
        <Route path="/vbeef" element={<><ViewBeef /><APNavbar /><Footer /></>} />
        <Route path="/upbeef" element={<><UpdateBeef /><APNavbar /><Footer /></>} />
        <Route path="/egg" element={<><Egg /><APNavbar /><Footer /></>} />
        <Route path="/pork" element={<><Pork /><APNavbar /><Footer /></>} />
        <Route path="/chicken" element={<><Chicken /><APNavbar /><Footer /></>} />
        <Route path="/goatmilk" element={<><GoatMilk /><APNavbar /><Footer /></>} />
        <Route path="/goat" element={<><Goat /><APNavbar /><Footer /></>} />
      </Routes>
    </Router>
  );
}
