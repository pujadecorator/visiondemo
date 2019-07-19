function myFunction() {
    var div = document.getElementById("result");
    if (document.getElementById("search").value == "") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }


}
function myFunction1() {
   
        div.style.display = "block";
   


}

function showResult() {
    var div = document.getElementById("Result1");
    if (div.style.display != "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}

function redirect() {
    location.href = "Teacher.html";
}

function hidewordgrid() {
    var div = document.getElementById("wordmodal");
    if (div.style.display != "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }

}

function hidepdfgrid() {
    var div = document.getElementById("pdfmodal");
    if (div.style.display != "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }

}
function showwordgrid() {
    var div = document.getElementById("wordmodal");
    div.style.display = "block";
}

function showpdfgrid() {
    var div = document.getElementById("pdfmodal");
    div.style.display = "block";
}

function prinipallogin() {
    if (document.getElementById("Principal").checked = true) {
        document.getElementById("Username").value = "scottpoling@contoso.com";
        document.getElementById("password").value = "principal";
        document.getElementById("teach").style.color = '#448fb9';
        document.getElementById("stude").style.color = '#448fb9';
        document.getElementById("pare").style.color = '#448fb9';
        document.getElementById("Princ").style.color = '#f48a00';
    }
}

function teacherlogin() {
    if (document.getElementById("Teacher").checked = true) {
        document.getElementById("Username").value = "anitasuarez@contoso.com";
        document.getElementById("password").value = "teacher";
        document.getElementById("teach").style.color = '#f48a00';
        document.getElementById("stude").style.color = '#448fb9';
        document.getElementById("pare").style.color = '#448fb9';
        document.getElementById("Princ").style.color = '#448fb9';
    }
}

function studentlogin() {
    if (document.getElementById("Student").checked = true) {
        document.getElementById("Username").value = "donagarrett@contoso.com";
        document.getElementById("password").value = "student";
        document.getElementById("teach").style.color = '#448fb9';
        document.getElementById("stude").style.color = '#f48a00';
        document.getElementById("pare").style.color = '#448fb9';
        document.getElementById("Princ").style.color = '#448fb9';
    }
}

function parentlogin() {
    if (document.getElementById("Parent").checked = true) {
        document.getElementById("Username").value = "Katharinefrank@contoso.com";
        document.getElementById("password").value = "parent";
        document.getElementById("teach").style.color = '#448fb9';
        document.getElementById("stude").style.color = '#448fb9';
        document.getElementById("pare").style.color = '#f48a00';
        document.getElementById("Princ").style.color = '#448fb9';
    }
}

function login() {
    if (document.getElementById("password").value == "parent") {
        location.href = "Parent.html";
    }
    if (document.getElementById("password").value == "teacher") {
        location.href = "Teacher.html";
    }
    if (document.getElementById("password").value == "student") {
        location.href = "Student.html";
    }
    if (document.getElementById("password").value == "principal") {
        location.href = "Principal.html";
    }
}

function loadcollaboration() {
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if (sPage == "Principal.html") {
        window.location.href = "Collaboration.html?name=Scoot Poling";
    }
    if (sPage == "Student.html") {
        window.location.href = "Collaboration.html?name=Dona Garrett";
    }
    if (sPage == "Teacher.html") {
        window.location.href = "Collaboration.html?name=Anita Suarez";
    }

}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function equalHeight(group) {
   tallest = 0;
   group.each(function() {
      thisHeight = $(this).height();
      if(thisHeight > tallest) {
         tallest = thisHeight;
      }
   });
   group.height(tallest);
}
$(document).ready(function() {
   equalHeight($(".column"));
});