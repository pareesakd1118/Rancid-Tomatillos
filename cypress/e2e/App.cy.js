describe("The user can use the site properly ", () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      body: {
        movies: [
          {
            id: 436270,
            poster_path:
              "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            title: "Black Adam",
            average_rating: 4,
            release_date: "2022-10-19",
          },
          {
            id: 724495,
            poster_path:
              "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
            title: "The Woman King",
            average_rating: 7,
            release_date: "2022-09-15",
          },
        ],
      },
    }).visit("http://localhost:3000/");
  });

  it("displays movies on the main page", () => {
    cy.get(".movie").should("have.length.greaterThan", 0);
  });

  it("shows movie details when a movie is clicked", () => {
   //whats this do 
  
    cy.get(".movie").first().click();
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 200,
        body: {
          movie: {
            id: 436270,
            title: "Black Adam",
            poster_path:
              "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            release_date: "2022-10-19",
            overview:
              "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            genres: ["Action", "Fantasy", "Science Fiction"],
            budget: 200000000,
            revenue: 384571691,
            runtime: 125,
            tagline: "The world needed a hero. It got Black Adam.",
            average_rating: 4,
          },
        },
      }
    )
    cy.get(".movieDescDisplay").should("be.visible")
  });

  it("shows movie details when a movie is clicked", () => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495",
      {
        statusCode: 200,
        body: {
          movie: {
            id: 436270,
            title: "Black Adam",
            poster_path:
              "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            release_date: "2022-10-19",
            overview:
              "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            genres: ["Action", "Fantasy", "Science Fiction"],
            budget: 200000000,
            revenue: 384571691,
            runtime: 125,
            tagline: "The world needed a hero. It got Black Adam.",
            average_rating: 4,
          },
        },
      }
    ).as("getMovie");
    cy.get(".movie").last().click();
    cy.url().should("include", "724495");
  });
  
  it("returns to the main page when the 'Back' button is clicked", () => {
    cy.intercept(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 200,
        body: {
          movie: {
            id: 436270,
            title: "Black Adam",
            poster_path:
              "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            release_date: "2022-10-19",
            overview:
              "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            genres: ["Action", "Fantasy", "Science Fiction"],
            budget: 200000000,
            revenue: 384571691,
            runtime: 125,
            tagline: "The world needed a hero. It got Black Adam.",
            average_rating: 4,
          },
        },
      }
    )
  
    cy.get(".movie").first().click();
    cy.get(".movieDescDisplay").should("be.visible")
    cy.get(".backButton").click();
    cy.get(".movie").should("be.visible");
  });

  it("displays an error message if fetching movies fails", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
        body: {},
      }
    );
    cy.visit("http://localhost:3000/");
    cy.get(".error").should("be.visible");
  });

  it("displays an error message if fetching single movie description fails", () => {
    cy.get(".movie").first().click();
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 500,
        body: {}
      }
    )
    cy.get(".error").should("be.visible")
  })

  it("displays an error message if fetching single movie description fails", () => {
    cy.get(".movie").last().click()
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495",
      {
        statusCode: 500,
        body: {}
      }
    )
    cy.get(".error").should("be.visible")
  })
});
