<script>
  import { goto } from '$app/navigation';

  // Variables for the search inputs
  let title = '';
  let location = '';

  // Function to handle the search button click
  function handleSearch() {
    const params = new URLSearchParams();

    if (title) params.set('what', title);
    if (location) params.set('where', location);

    const queryString = params.toString();
    goto(`?${queryString}`, { noscroll: true });
  }
</script>

<header class="top-bar">
  <div class="header-content">
    <!-- Left Section: Logo -->
    <div class="left-section">
      <a href="#" class="logo-link" aria-label="LinkedIn">
        <!-- LinkedIn Logo SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="logo-icon"
          width="34"
          height="34"
          focusable="false"
        >
          <path
            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19v4.81h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          ></path>
        </svg>
      </a>
    </div>

    <!-- Center Section: Search Bars -->
    <div class="center-section">
      <!-- First Search Input with Icon -->
      <div class="search-input-wrapper">
        <div class="input-icon">
          <!-- Search Icon SVG -->
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.56 13.44l-3.3-3.3a5.5 5.5 0 10-1.06 1.06l3.3 3.3a.75.75 0 101.06-1.06zM2.75 7a4.25 4.25 0 114.25 4.25A4.25 4.25 0 012.75 7z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Title, Skill, Position"
          class="search-input"
          aria-label="Title, Skill, Position"
          bind:value={title}
        />
      </div>

      <!-- Second Search Input with Icon -->
      <div class="search-input-wrapper">
        <div class="input-icon">
          <!-- Location Icon SVG -->
          <svg
            role="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1.75A4.25 4.25 0 003.75 6c0 2.74 3.36 6.59 3.68 6.94a.25.25 0 00.38 0c.32-.35 3.69-4.2 3.69-6.94A4.25 4.25 0 008 1.75zM8 8a2 2 0 112-2 2 2 0 01-2 2z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Location"
          class="search-input"
          aria-label="Location"
          bind:value={location}
        />
      </div>

      <!-- Search Button -->
      <button class="search-button" on:click={handleSearch}>Search</button>
    </div>

    <!-- Right Section: Navigation Buttons and Profile Button -->
    <div class="right-section">
      <nav class="nav-menu">
        <!-- Home -->
        <a href="#" class="nav-item">
          <div class="nav-icon">
            <!-- Home Icon SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
            </svg>
          </div>
          <span>Home</span>
        </a>
        <!-- My Network -->
        <a href="#" class="nav-item">
          <div class="nav-icon">
            <!-- My Network Icon SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
              ></path>
            </svg>
          </div>
          <span>My Network</span>
        </a>
        <!-- Jobs -->
        <a href="#" class="nav-item active">
          <div class="nav-icon">
            <!-- Jobs Icon SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3v-6h1.3z"
              ></path>
            </svg>
          </div>
          <span>Jobs</span>
        </a>
        <!-- Messaging -->
        <a href="#" class="nav-item">
          <div class="nav-icon">
            <!-- Messaging Icon SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"
              ></path>
            </svg>
          </div>
          <span>Messaging</span>
        </a>
        <!-- Notifications -->
        <a href="#" class="nav-item">
          <div class="nav-icon">
            <!-- Notifications Icon SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
              ></path>
            </svg>
          </div>
          <span>Notifications</span>
        </a>
      </nav>

      <!-- Profile Button -->
      <a href="#" class="profile-item">
        <div class="profile-icon">
          <div class="profile-circle"></div>
        </div>
        <span>Me</span>
      </a>
    </div>
  </div>
</header>

<style>
  .top-bar {
    background-color: #fff;
    border-bottom: 1px solid #E8E8E8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%; /* Stretch the header to the full screen width */
  }

  .header-content {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 65px;
    margin: 0 auto;
    /* Apply the side margins */
    max-width: 56%; /* 100% - (22% * 2) = 56% */
  }

  /* Center the header content with side margins */
  @media screen and (min-width: 992px) {
    .header-content {
      max-width: 56%;
    }
  }

  @media screen and (max-width: 991px) {
    .header-content {
      max-width: 100%;
    }
  }

  /* Left Section Styles */
  .left-section {
    display: flex;
    align-items: center;
  }

  .logo-link {
    display: flex;
    align-items: center;
    color: #666;
  }

  .logo-link:hover {
    color: #000;
  }

  .logo-icon {
    width: 34px;
    height: 34px;
  }

  /* Center Section Styles */
  .center-section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
  }

  .search-input-wrapper {
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    fill: #666;
  }

  .search-input {
    width: 165px;
    height: 35px;
    border-radius: 3px;
    background: #EDF3F7;
    border: none;
    padding: 0 10px 0 35px;
    color: #000;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }

  .search-button {
    height: 35px;
    border-radius: 3px;
    background: #fff;
    border: 1px solid #0B66C2;
    color: #0B66C2;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    padding: 0 15px;
    cursor: pointer;
  }

  /* Right Section Styles */
  .right-section {
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 15px;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #666; /* Grey color */
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
  }

  .nav-item:hover {
    color: #000; /* Black on hover */
  }

  .nav-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }

  .nav-icon svg {
    fill: currentColor;
  }

  .profile-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #666; /* Grey color */
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
  }

  .profile-item:hover {
    color: #000; /* Black on hover */
  }

  .profile-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }

  .profile-circle {
    width: 24px;
    height: 24px;
    background-color: #ccc; /* Placeholder color */
    border-radius: 50%;
  }

  /* Responsive Styles */
  @media (max-width: 991px) {
    .header-content {
      flex-wrap: wrap;
      height: auto;
      max-width: 100%;
    }
    .center-section {
      margin: 10px 0;
      justify-content: center;
      width: 100%;
    }
    .nav-menu {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
