<template>
  <el-button
    class="modal-footer__button edit"
    @click="centerDialogVisible = true"
  >
    Add
  </el-button>
  <el-dialog v-model="centerDialogVisible" width="45%" center>
    <div>
      <h3 class="modal-title">Add Pokemon</h3>
      <div class="modal-content">
        <div class="pokemon_description">
          <el-form
            :rules="newPokemonValidation"
            ref="newPokemonForm"
            :model="newPokemon"
          >
            <el-form-item label="Name" prop="name">
              <el-input type="text" v-model="newPokemon.name"></el-input>
            </el-form-item>
            <el-form-item label="Weight" prop="weight">
              <el-input type="number" v-model="newPokemon.weight"></el-input>
            </el-form-item>
            <el-form-item label="Height" prop="height">
              <el-input type="number" v-model="newPokemon.height"></el-input>
            </el-form-item>
            <el-form-item label="Photo" prop="sprites.front_default">
              <el-input
                type="text"
                v-model="newPokemon.sprites.front_default"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="dialog-footer">
      <el-button class="modal-footer__button" @click="Add()">Add</el-button>
      <el-button
        class="modal-footer__button"
        @click="centerDialogVisible = false"
        >Cancel</el-button
      >
      <el-button class="modal-footer__button" @click="Clean()">Clean</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { validateName, capitalize } from "@/mixins/validator.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      centerDialogVisible: false,
      newPokemon: {
        weight: 60,
        height: 4,
        name: "Pikachu",
        sprites: {
          front_default:
            "https://i.pinimg.com/originals/0a/44/75/0a4475739cea776659a5148a1e480797.png",
        },
      },
      newPokemonValidation: {
        name: [{ validator: validateName, trigger: "blur" }],
      },
    };
  },
  name: `AddPokemon`,
  computed: {
    ...mapState({
      pokemons: (state) => state.pokemonsMod.pokemons,
    }),
  },
  methods: {
    ...mapActions({
      getData: ("pokemonsMod", "getData"),
      addPokemon: ("pokemonsMod", "addPokemon"),
    }),
    Add() {
      this.$refs["newPokemonForm"].validate((valid) => {
        if (valid) {
          let pokemon = {};
          Object.assign(pokemon, this.newPokemon);
          pokemon.name = capitalize(pokemon.name);
          this.addPokemon(pokemon);
          this.centerDialogVisible = false;
        }
      });
    },
    Clean() {
      this.newPokemon = {
        name: "Enter the name",
        weight: 0,
        height: 0,
        sprites: {
          front_default: "Link to photo",
        },
      };
    },
  },
};
</script>

<style scoped lang="scss">
.dialog-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #bfbfbf1e;
  justify-content: center;
}

.modal {
  background: #000000;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  max-height: 550px;
  overflow-y: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &-title {
    color: #0971c7;
  }

  &-content {
    margin-bottom: 20px;
    color: rgb(255, 255, 255);
  }

  &-footer {
    &__button {
      background-color: #0971c7;
      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 8px;
      min-width: 150px;
      margin: 10px;
    }
  }
}
</style>
