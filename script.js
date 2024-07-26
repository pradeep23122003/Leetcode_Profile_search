function requestLeetCodeData() {
  var username = document.getElementById("username").value;
  if (!username) {
    alert("Please enter a LeetCode username.");
    return;
  }

  // Fetch user profile
  fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((profile) => {
      console.log(profile); // Log profile data to check the URL
      var profileDiv = document.getElementById("profile");
      profileDiv.innerHTML = `
                <div class="profile-grid">
                    <div>
                         <img src="./images/hacker.png" alt="LeetCode Logo">
                    </div>
                    <div>
                        <h2>${profile.realName || profile.username} (${
        profile.username
      })</h2>
                        <p>Ranking: ${
                          profile.ranking || "No ranking available"
                        }</p>
                        <p>Total Solved: ${profile.totalSolved}</p>
                        <p>Easy: ${profile.easySolved}</p>
                        <p>Medium: ${profile.mediumSolved}</p>
                        <p>Hard: ${profile.hardSolved}</p>
                        <p>Profile URL: <a href="https://leetcode.com/${
                          profile.username
                        }" target="_blank">leetcode.com/${
        profile.username
      }</a></p>
                    </div>
                </div>
                <div class="solved-problems">
                    <h3>Solved Problems</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Problem</th>
                            </tr>
                        </thead>
                        <tbody id="problems-body">
                            <!-- Problems will be inserted here -->
                        </tbody>
                    </table>
                </div>
            `;

      // Fetch solved problems using CORS proxy
      fetch(
        `https://cors-anywhere.herokuapp.com/https://leetcode-problems-api.herokuapp.com/${username}`
      )
        .then((response) => response.json())
        .then((problems) => {
          const tbody = document.getElementById("problems-body");
          tbody.innerHTML = problems
            .map(
              (problem) => `
                        <tr>
                            <td>${problem.title}</td>
                        </tr>
                    `
            )
            .join("");
        })
        .catch((error) => {
          console.log("Error fetching solved problems:", error);
          const tbody = document.getElementById("problems-body");
          tbody.innerHTML = "<tr><td>Error fetching solved problems.</td></tr>";
        });
    })
    .catch((error) => {
      console.log("Error:", error);
      var profileDiv = document.getElementById("profile");
      profileDiv.innerHTML = "Error fetching user profile.";
    });
}
