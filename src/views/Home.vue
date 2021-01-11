<template>
  <h1 class="text-4xl text-white">COCKTAIL D(VUE)</h1>
  <section
    class="filters-container container grid grid-cols-1 md:grid-cols-3 gap-3 my-3"
  >
    <div class="flex justify-around">
      <label for="cocktail_name">Search by name:</label>
      <input
        class="rounded-md"
        type="text"
        name="cocktail_name"
        id="cocktail_name"
        v-model="cocktailName"
      />
    </div>
    <div class="flex justify-around">
      <label for="ingredient">Search by ingredient:</label>
      <input
        class="rounded-md"
        type="text"
        name="ingredient"
        id="ingredient"
        v-model="ingredient"
      />
    </div>
    <div class="flex justify-around">
      <label for="glass">Search by glass:</label>
      <input
        class="rounded-md"
        type="text"
        name="glass"
        ic="glass"
        v-model="glass"
      />
    </div>
  </section>

  <section
    class="list-container container p-8 mt-10 mb-3 grid grid-cols-1 gap-2"
    :class="[cocktails.length ? 'md:grid-cols-3' : 'md:grid-cols-1']"
  >
    <template v-if="cocktails.length">
      <p v-for="i in cocktails" :key="i">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </template>

    <template v-else>
      <div class="empty-content flex flex-col items-center">
        <div class="text-2xl">⬆ Do a search ⬆</div>
        <img src="../assets/img/empty-content.png" />
      </div>
    </template>
  </section>
</template>

<script>
import { ref } from "vue";
// @ is an alias to /src
// import CocktailService from "../services";

export default {
  name: "Home",
  async setup() {
    let cocktails = ref([]);
    let cocktailName = ref("");
    let ingredient = ref("");
    let glass = ref("");

    // cocktails = await CocktailService.getIngredientsList("Gin");
    console.log("cocktails =>", cocktails);

    return {
      cocktails,
      cocktailName,
      ingredient,
      glass
    };
  }
};
</script>
<style lang="scss" scoped>
.filters-container {
  width: 80vw;
}
.list-container {
  width: 80vw;
  height: 75vh;

  background-color: rgba(255, 255, 255, 0.9);

  border-radius: 1rem;
  box-shadow: -1px 3px 17px -1px #000000;
  overflow: scroll;
}

.empty-content {
  width: 100%;

  img {
    width: 50%;
  }
}
</style>
