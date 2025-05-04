document.addEventListener("DOMContentLoaded", () => {
    const helloBtn = document.getElementById("say-hello-btn");
    const helloPopup = document.getElementById("hello-popup");
  
    helloBtn.addEventListener("click", () => {
      helloPopup.style.animation = "none";
      void helloPopup.offsetWidth;
      helloPopup.style.display = "block";
      helloPopup.style.animation = "slideDown 0.5s forwards";
  
      setTimeout(() => {
        helloPopup.style.top = "-100px";
        setTimeout(() => {
          helloPopup.style.display = "none";
        }, 500);
      }, 3000);
    });
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const moreAboutBtn = document.querySelector(".about .btn");
    const body = document.querySelector("body");
  
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <div class="popup__content">
        <h2>About Me - Full Details</h2>
        <p style="text-align: justify;">
I have gained hands-on experience through internships and personal projects, such as working at RDL Technological Pvt Ltd, Mangalore, where I contributed to various development projects. My academic journey has been complemented by certifications in Java, HTML, and CSS, and I have earned the AWS Cloud Partitioner Badge.

In terms of achievements, I have participated in the "Science Project/Model" in Udupi and the "District-Level Badminton" event in Karkala, showcasing my diverse interests and ability to excel in both technical and extracurricular fields.

I am passionate about web development, machine learning, and cloud technologies, always seeking to learn and adapt to the latest trends. In my free time, I enjoy watching movies, listening to music, and learning the piano, balancing my technical pursuits with creative and recreational activities.

Currently, I am always looking for opportunities to apply my skills and contribute to exciting, innovative projects.</p>
        <button class="close-btn">Close</button>
      </div>
    `;
  
    popup.style.display = "none";
    body.appendChild(popup);
  
    moreAboutBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });
  
    const closePopup = () => {
      popup.style.display = "none";
    };
  
    popup.querySelector(".close-btn").addEventListener("click", closePopup);
  
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const serviceDetails = {
      web: {
        title: "Back End Development",
        text: "I take a creative yet technical approach to back-end development, ensuring that every application is not only functionally robust but also optimized for performance and scalability. Whether you're building a new system from the ground up or enhancing an existing one, I work closely with you to implement secure, efficient server-side logic and database management. My solutions prioritize data integrity, API integration, and seamless interaction with front-end interfaces. I primarily use languages and technologies like Java, Node.js, PHP, SQL, and MySQL to build reliable platforms that support business operations and future growth."
      },
      uiux: {
        title: "Full Stack Developement",
        text: "I provide end-to-end full-stack development services, utilizing the latest technologies to build fast, secure, and scalable web applications. My expertise covers both front-end and back-end development, ensuring a seamless experience for users while maintaining robust performance. I work with a wide range of technologies such as React, Node.js, JavaScript, HTML, CSS, PHP, XML, and databases like MySQL and SQLite. Whether you need a dynamic single-page application or an enterprise-level solution, I focus on building solutions that are both efficient and scalable, ready to meet future demands."
      },
      cloud: {
        title: "Creative Design",
        text: "My creative design services extend to web design, machine learning model interfaces, and cloud computing solutions. In web design, I focus on user-friendly interfaces and seamless navigation. For machine learning and cloud computing, I design dashboards and interfaces that simplify complex data and make them accessible to users. By leveraging cutting-edge design principles and tools, I ensure that each solution is not only functional but also visually appealing, enhancing the overall user experience across all platforms."
      }
    };
  
    const body = document.querySelector("body");
  
    // Create popup element
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <div class="popup__content">
        <h2 id="popup-title"></h2>
        <p id="popup-text"></p>
        <button class="close-btn">Close</button>
      </div>
    `;
    popup.style.display = "none";
    body.appendChild(popup);
  
    const popupTitle = popup.querySelector("#popup-title");
    const popupText = popup.querySelector("#popup-text");
    const closeBtn = popup.querySelector(".close-btn");
  
    // Attach click handlers
    document.querySelectorAll(".read-more").forEach(button => {
      button.addEventListener("click", () => {
        const service = button.getAttribute("data-service");
        popupTitle.textContent = serviceDetails[service].title;
        popupText.textContent = serviceDetails[service].text;
        popup.style.display = "flex";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let form = e.target;
    let formData = new FormData(form);

    // Show confirmation message
    let formStatus = document.getElementById('formStatus');
    formStatus.style.display = 'block';

    // Animate the message (using a class that triggers fadeInOut animation)
    formStatus.classList.add('form-popup');

    // Use fetch to send data to PHP script for storing in the database
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Optionally handle server response here
        console.log(data); // For debugging
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Hide the form confirmation after 4 seconds
    setTimeout(function () {
        formStatus.style.display = 'none';
    }, 4000);

    // Reset the form
    form.reset();
});


  