import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PreHomePage from "./pages/PreHomePage";
import AdminOrganizeEventPage from "./pages/AdminOrganizeEventPage";
import AdminOrganizeEventPage1 from "./pages/AdminOrganizeEventPage1";
import AdminHomePage from "./pages/AdminHomePage";
import AdminAboutUsPage from "./pages/AdminAboutUsPage";
import AdminProfilePage from "./pages/AdminProfilePage";
import ManageVolunteers from "./pages/ManageVolunteers";
import ManageOrganizations from "./pages/ManageOrganizations";
import ManageVolunteers1 from "./pages/ManageVolunteers1";
import ManageOrganizations1 from "./pages/ManageOrganizations1";
import ManageEvents from "./pages/ManageEvents";
import AdminViewAllOrgs from "./pages/AdminViewAllOrgs";
import AdminOrganizeEventPage2 from "./pages/AdminOrganizeEventPage1";
import SuccessPage from "./pages/SuccessPage";
import StatsPage from "./pages/StatsPage";
import ProfilePage from "./pages/ProfilePage";
import PostVolunteerPage from "./pages/PostVolunteerPage";
import PostHomePage from "./pages/PostHomePage";
import PostVolunteerPage1 from "./pages/PostVolunteerPage1";
import PostAboutUsPage from "./pages/PostAboutUsPage";
import AllOrgsPage from "./pages/AllOrgsPage";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import ContactPage from "./pages/ContactPage";
import PostContactPage from "./pages/PostContactPage";
import SignUpScreen1 from "./pages/SignUpScreen1";
import SignUpScreen2 from "./pages/SignUpScreen2";
import PreAboutUsPage from "./pages/PreAboutUsPage";
import PreVolunteerPage from "./pages/PreVolunteerPage";
import PreVolunteerPage1 from "./pages/PreVolunteerPage1";
import OrgOrganizeEventPage from "./pages/OrgOrganizeEventPage";
import OrgOrganizeEventPage1 from "./pages/OrgOrganizeEventPage1";
import OrgProfilePage from "./pages/OrgProfilePage";
import OrgOrganizeEventPage2 from "./pages/OrgOrganizeEventPage2";
import OrgHomePage from "./pages/OrgHomePage";
import OrgAboutUsPage from "./pages/OrgAboutUsPage";
import OrgEvents from "./pages/OrgEvents";
import AllPeoplePageForOrg from "./pages/AllPeoplePageForOrg";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-organize-event-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/admin-organize-event-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/admin-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/manage-volunteers":
        title = "";
        metaDescription = "";
        break;
      case "/manage-organizations":
        title = "";
        metaDescription = "";
        break;
      case "/manage-volunteers-2":
        title = "";
        metaDescription = "";
        break;
      case "/manage-organizations-2":
        title = "";
        metaDescription = "";
        break;
      case "/manage-events":
        title = "";
        metaDescription = "";
        break;
      case "/admin-view-all-orgs":
        title = "";
        metaDescription = "";
        break;
      case "/admin-organize-event-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/success-page":
        title = "";
        metaDescription = "";
        break;
      case "/stats-page":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/post-volunteer-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/post-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/post-volunteer-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/post-about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/all-orgs-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-screen":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-screen":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page":
        title = "";
        metaDescription = "";
        break;
      case "/post-contact-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-screen-2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-screen-3":
        title = "";
        metaDescription = "";
        break;
      case "/pre-about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/pre-volunteer-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/pre-volunteer-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/org-organize-event-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/org-organize-event-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/org-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/org-organize-event-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/org-home-page":
        title = "";
        metaDescription = "";
        break;
      case "/org-about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/org-events":
        title = "";
        metaDescription = "";
        break;
      case "/all-people-page-for-org":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PreHomePage />} />
      <Route
        path="/admin-organize-event-page-2"
        element={<AdminOrganizeEventPage />}
      />
      <Route
        path="/admin-organize-event-page-3"
        element={<AdminOrganizeEventPage1 />}
      />
      <Route path="/admin-home-page" element={<AdminHomePage />} />
      <Route path="/admin-about-us-page" element={<AdminAboutUsPage />} />
      <Route path="/admin-profile-page" element={<AdminProfilePage />} />
      <Route path="/manage-volunteers" element={<ManageVolunteers />} />
      <Route path="/manage-organizations" element={<ManageOrganizations />} />
      <Route path="/manage-volunteers-2" element={<ManageVolunteers1 />} />
      <Route
        path="/manage-organizations-2"
        element={<ManageOrganizations1 />}
      />
      <Route path="/manage-events" element={<ManageEvents />} />
      <Route path="/admin-view-all-orgs" element={<AdminViewAllOrgs />} />
      <Route
        path="/admin-organize-event-page-1"
        element={<AdminOrganizeEventPage2 />}
      />
      <Route path="/success-page" element={<SuccessPage />} />
      <Route path="/stats-page" element={<StatsPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/post-volunteer-page-2" element={<PostVolunteerPage />} />
      <Route path="/post-home-page" element={<PostHomePage />} />
      <Route path="/post-volunteer-page-1" element={<PostVolunteerPage1 />} />
      <Route path="/post-about-us-page" element={<PostAboutUsPage />} />
      <Route path="/all-orgs-page" element={<AllOrgsPage />} />
      <Route path="/login-screen" element={<LoginScreen />} />
      <Route path="/sign-up-screen" element={<SignUpScreen />} />
      <Route path="/contact-page" element={<ContactPage />} />
      <Route path="/post-contact-page" element={<PostContactPage />} />
      <Route path="/sign-up-screen-2" element={<SignUpScreen1 />} />
      <Route path="/sign-up-screen-3" element={<SignUpScreen2 />} />
      <Route path="/pre-about-us-page" element={<PreAboutUsPage />} />
      <Route path="/pre-volunteer-page-1" element={<PreVolunteerPage />} />
      <Route path="/pre-volunteer-page-2" element={<PreVolunteerPage1 />} />
      <Route
        path="/org-organize-event-page-1"
        element={<OrgOrganizeEventPage />}
      />
      <Route
        path="/org-organize-event-page-2"
        element={<OrgOrganizeEventPage1 />}
      />
      <Route path="/org-profile-page" element={<OrgProfilePage />} />
      <Route
        path="/org-organize-event-page-3"
        element={<OrgOrganizeEventPage2 />}
      />
      <Route path="/org-home-page" element={<OrgHomePage />} />
      <Route path="/org-about-us-page" element={<OrgAboutUsPage />} />
      <Route path="/org-events" element={<OrgEvents />} />
      <Route
        path="/all-people-page-for-org"
        element={<AllPeoplePageForOrg />}
      />
    </Routes>
  );
}
export default App;
