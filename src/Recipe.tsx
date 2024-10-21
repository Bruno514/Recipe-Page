import "./Recipe.scss";
import ImageOmelette from "./assets/images/image-omelette.jpeg";
import UListItem from "./UListItem";

function Recipe() {
  return (
    <article className="recipe">
      <figure className="recipe-image">
        <img src={ImageOmelette} alt="Omelette Image" />
      </figure>

      <main>
        <h2>Simple Omelette Recipe</h2>
        <section className="recipe-description">
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>

        <section className="recipe-preptime">
          <h4>Preparation time</h4>
          <ul>
            <UListItem
              element={
                <p>
                  <b>Total:</b> Approximately 10 minutes
                </p>
              }
            />
            <UListItem
              element={
                <p>
                  <b>Preparation:</b> 5 minutes
                </p>
              }
            />
            <UListItem
              element={
                <p>
                  <b>Cooking:</b> 5 minutes
                </p>
              }
            />
          </ul>
        </section>

        <section className="recipe-ingredients">
          <h3>Ingredients</h3>
          <ul>
            <UListItem element={<p>2-3 large eggs</p>} />
            <UListItem element={<p>Salt, to taste</p>} />
            <UListItem element={<p>Pepper, to taste</p>} />
            <UListItem element={<p>1 tablespoon of button or oil</p>} />
            <UListItem
              element={
                <p>
                  Optional filling: cheese, diced vegetables, cooked meats,
                  herbs
                </p>
              }
            />
          </ul>
        </section>

        <hr />

        <section className="recipe-instructions">
          <h3>Instructions</h3>
          <ol>
            <li>
              <p>
                <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </p>
            </li>

            <li>
              <p>
                <b>Heat the pan:</b> Place a non-stick frying pan over medium
                heat and add butter or oil.
              </p>
            </li>

            <li>
              <p>
                <b>Cook the omelette:</b> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>

            <li>
              <p>
                <b>Add fillings (optional):</b> When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </p>
            </li>

            <li>
              <p>
                <b>Fold and serve:</b> As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </p>
            </li>

            <li>
              <p>
                <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                needed.
              </p>
            </li>
          </ol>
        </section>

        <hr />

        <section className="recipe-nutrition">
          <h3>Nutrition</h3>

          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table>
            <tr>
              <th>Calories</th>
              <td>277kcal</td>
            </tr>

            <tr>
              <th>Carbs</th>
              <td>0g</td>
            </tr>

            <tr>
              <th>Protein</th>
              <td>20g</td>
            </tr>

            <tr>
              <th>Fat</th>
              <td>22g</td>
            </tr>
          </table>
        </section>
      </main>
    </article>
  );
}

export default Recipe;
