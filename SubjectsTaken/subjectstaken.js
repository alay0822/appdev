import courses from 'courses.json';

document.addEventListener("DOMContentLoaded", () => {
    const coursesContainer = document.getElementById("courses-container");

    // Group subjects by year and semester
    const groupedSubjects = {};
    subjects.forEach(subject => {
        const key = `${subject.year} - ${subject.semester}`;
        if (!groupedSubjects[key]) {
            groupedSubjects[key] = [];
        }
        groupedSubjects[key].push(subject);
    });

    // Generate HTML for each year and semester
    for (const [key, subjectsList] of Object.entries(groupedSubjects)) {
        const [year, semester] = key.split(" - ");

        let yearContainer = document.querySelector(`.year-container[data-year="${year}"]`);
        if (!yearContainer) {
            yearContainer = document.createElement("div");
            yearContainer.classList.add("year-container");
            yearContainer.setAttribute("data-year", year);
            yearContainer.innerHTML = `<h2 class="year-title">${year}</h2>`;
            coursesContainer.appendChild(yearContainer);
        }

        const semesterContainer = document.createElement("div");
        semesterContainer.classList.add("semester-container");
        semesterContainer.innerHTML = `<h3 class="semester-title">${semester}</h3>`;

        const courseList = document.createElement("ul");
        courseList.classList.add("courses-list");

        subjectsList.forEach(subject => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${subject.code}:</strong> ${subject.name} (${subject.credits} Credits)`;
            courseList.appendChild(li);
        });

        semesterContainer.appendChild(courseList);
        yearContainer.appendChild(semesterContainer);
    }
});
