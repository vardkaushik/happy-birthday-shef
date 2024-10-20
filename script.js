document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading page
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('loadingPage').style.display = 'block';

    setTimeout(function() {
        // Hide loading and show birthday page
        document.getElementById('loadingPage').style.display = 'none';
        document.getElementById('birthdayPage').style.display = 'block';

        // Set the birthday message
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const fullName = `${firstName} ${lastName}`;
        document.getElementById('happyBirthday').innerHTML = `Happy 25th Birthday, ${fullName}! 🎉🎂`;

    }, 2000); // Simulating data fetching
});
