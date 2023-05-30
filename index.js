window.onload = pageLoad;

function pageLoad() {

    // OPENING AND CLOSING OF MENU FUNCTIONALITY--------------START
    document.getElementById("mainMenuWebsite").style.display = "none";
    var mainMenuButton = document.getElementById("mainMenuButton");
    var closeMainMenuButton = document.getElementById("closeMainMenu");

    mainMenuButton.onclick = openMainMenu;
    closeMainMenuButton.onclick = closeMainMenu;

    function openMainMenu() {
        document.getElementById("mainMenuWebsite").style.display = "flex";
        document.getElementById("mainMenuWebsite").classList.remove("hideClass");
        document.getElementById("mainMenuWebsite").classList.add("displayMenuClass");
        document.getElementById("mainWebsite").style.overflow = "hidden";
    }
    function closeMainMenu() {
        document.getElementById("mainMenuWebsite").classList.remove("displayMenuClass");
        document.getElementById("mainMenuWebsite").classList.add("hideClass");
        setTimeout(async () => {
            document.getElementById("mainMenuWebsite").style.display = "none";
            document.getElementById("mainWebsite").style.overflow = "auto";
           }, 2000);
    }
    // OPENING AND CLOSING OF MENU FUNCTIONALITY--------------END

    document.getElementById("menuOption1").onclick = closeMainMenu;
    document.getElementById("menuOption2").onclick = closeMainMenu;
    document.getElementById("menuOption3").onclick = closeMainMenu;
    document.getElementById("menuOption4").onclick = closeMainMenu;
    document.getElementById("menuOption5").onclick = closeMainMenu;

    // BOUNCING WORD FUNCTIONALITY--------------START
    document.querySelectorAll(".bouncing-word").forEach((element) => {
        element.addEventListener("mouseover", (e) => bounce(e.target));
    });
    
    function bounce(word) {
        if (!word.classList.contains("bounce")) {
            word.classList.add("bounce");
            setTimeout(
                function () {
                    word.classList.remove("bounce");
                },
                1000
            );
        }
    }
    // BOUNCING WORD FUNCTIONALITY--------------END

    // SCROLL DOWN FUNCTIONALITY--------------START
    document.getElementById("scrollToNext").onclick = scrollDownSmooth;
    function scrollDownSmooth() {
        document.querySelector('#section2').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }, 1000);
    }
    // SCROLL DOWN FUNCTIONALITY--------------END

    // VIEW MORE SKILLS FUNCTIONALITY--------------START
    document.getElementById("viewSkills").onclick = viewMoreSkills;
    function viewMoreSkills() {
        if(document.getElementById("mainSkillsBox").classList.contains("allSkillsContainerChange")) {
            document.getElementById("mainSkillsBox").classList.remove("allSkillsContainerChange");
            document.getElementById("viewSkillsButton").classList.remove("viewMoreSkillsChange");
            document.getElementById("viewAllText").innerHTML = "View All";
            document.getElementById("upDownArrow").classList.remove("fa-chevron-up");
            document.getElementById("upDownArrow").classList.add("fa-chevron-down");
        }
        else {
            document.getElementById("mainSkillsBox").classList.add("allSkillsContainerChange");
            document.getElementById("viewSkillsButton").classList.add("viewMoreSkillsChange");
            document.getElementById("viewAllText").innerHTML = "View Less";
            document.getElementById("upDownArrow").classList.remove("fa-chevron-down");
            document.getElementById("upDownArrow").classList.add("fa-chevron-up");
        }
    }
    // VIEW MORE SKILLS FUNCTIONALITY--------------END

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------START

    document.getElementById("clickMoreForAbout").onclick = function() {
        document.getElementById("moreAboutModal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeAbout").onclick = function() {
        document.getElementById("moreAboutModal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE PROJECT1 FUNCTIONALITY--------------START

    document.getElementById("clickForProject1").onclick = function() {
        document.getElementById("project1Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject1").onclick = function() {
        document.getElementById("project1Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project2 FUNCTIONALITY--------------START

    document.getElementById("clickForProject2").onclick = function() {
        document.getElementById("project2Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject2").onclick = function() {
        document.getElementById("project2Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project3 FUNCTIONALITY--------------START

    document.getElementById("clickForProject3").onclick = function() {
        document.getElementById("project3Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject3").onclick = function() {
        document.getElementById("project3Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project4 FUNCTIONALITY--------------START

    document.getElementById("clickForProject4").onclick = function() {
        document.getElementById("project4Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject4").onclick = function() {
        document.getElementById("project4Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project5 FUNCTIONALITY--------------START

    document.getElementById("clickForProject5").onclick = function() {
        document.getElementById("project5Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject5").onclick = function() {
        document.getElementById("project5Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project6 FUNCTIONALITY--------------START

    document.getElementById("clickForProject6").onclick = function() {
        document.getElementById("project6Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject6").onclick = function() {
        document.getElementById("project6Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project7 FUNCTIONALITY--------------START

    document.getElementById("clickForProject7").onclick = function() {
        document.getElementById("project7Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject7").onclick = function() {
        document.getElementById("project7Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project8 FUNCTIONALITY--------------START

    document.getElementById("clickForProject8").onclick = function() {
        document.getElementById("project8Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject8").onclick = function() {
        document.getElementById("project8Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // VIEW MORE project9 FUNCTIONALITY--------------START

    document.getElementById("clickForProject9").onclick = function() {
        document.getElementById("project9Modal").style.display = "block";
    }

    // When the user clicks on(x), close the modal
    document.getElementById("closeProject9").onclick = function() {
        document.getElementById("project9Modal").style.display = "none";
    }

    // VIEW MORE ABOUT POP UP FUNCTIONALITY--------------END

    // DOWNLOAD PDF
    document.getElementById("openPdf").onclick = openPdf;
    function openPdf() {
        window.open("docs/MuskanAggarwalResume.pdf", '_blank');
    }
    // OPEN LINKEDIN
    document.getElementById("openLinkedIn").onclick = openLin;
    function openLin() {
        window.open("https://www.linkedin.com/in/muskan-25-aggarwal/", '_blank');
    }
    // OPEN EMAIL
    document.getElementById("openEmail").onclick = openGmail;
    function openGmail() {

        const recipientEmail = 'muskan.10151@gmail.com';
        const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}`;
        window.open(gmailComposeURL, '_blank');
    }
    // OPEN LINKEDIN
    document.getElementById("openGithub").onclick = openGithub;
    function openGithub() {
        window.open("https://github.com/muskan251027", '_blank');
    }

}
