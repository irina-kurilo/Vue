<template>
  <h1>Pokemon</h1>
  <div>
    <el-row class="pokemon_card_row">
      <el-col class="pokemon_card_col" v-for="pokemon in pokemons" :key="pokemon" :span="5">

        <el-card class="card" @click="showModal(pokemon)">
          <img :src="pokemon.sprites.front_default" class="image" />
          <h3 @click="showModal(pokemon)">{{ pokemon.name }}</h3>
        </el-card>

        <div v-if="show" @click.self="closeModal">
          <div class="modal-backdrop" @click.self="closeModal">
            <div v-scroll-lock="show" class="modal">
              <div class="modal-close" @click="closeModal">✖</div>
              <h3 class="modal-title"> {{ poke.name }}</h3>
              <div class="modal-content">
                <carousel class="story-carousel story-carousel--colors">
                  <slide class="story-carousel__slide">
                    <img :src="poke.sprites.front_default" class="image" />
                  </slide>
                  <slide class="story-carousel__slide">
                    <img :src="poke.sprites.back_default" class="image" />
                  </slide>
                  <slide class="story-carousel__slide">
                    <img :src="poke.sprites.front_shiny" class="image" />
                  </slide>
                  <slide class="story-carousel__slide">
                    <img :src="poke.sprites.back_shiny" class="image" />
                  </slide>
                </carousel>
                <div class="pokemon_description">
                  <p>Weight: {{ poke.weight }}</p>
                  <p>Height: {{ poke.height }}</p>
                  <p>Ability:</p>
                  <span v-for="abi in poke.abilities" :key="abi">
                    {{ abi.ability.name }};
                  </span>
                  <div class="demo-collapse">
                    <el-collapse v-model="activeNames" @change="handleChange">
                      <el-collapse-item title="Move:" name="1">
                        <div>
                          <span v-for="move in poke.moves" :key="move">
                            {{ move.move.name }};
                          </span>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="modal-footer__button" @click="closeModal">
                  Ок
                </button>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-pagination v-loading="loading" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 200]" layout="sizes, prev, pager, next" :total="totalCount" @size-change="getData"
      @current-change="getData" />
  </div>
</template>
<script>
import 'es6-promise/auto';
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
export default {
  data() {
    return {
      show: false,
      loading: true,
      currentPage: 1,
      pageSize: 10,
      totalCount: 0,
      pokemons: [],
      poke: "",
    }
  },
  name:`Pokemon`,
  components: {
    Carousel,
    Slide
  },
  methods: {
    closeModal() {
      this.show = false
    },
    showModal(pokemon) {
      this.show = true;
      this.poke = pokemon;
    },
    sendDataFunction: function () {
      // обработчик отправки данных
    },
    getData() {
      this.axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(this.currentPage - 1) * this.pageSize}&limit=${this.pageSize}`)
        .then((response) => {
          this.totalCount = response.data.count;
          this.pokemons = [];
          response.data.results.forEach(items => {
            this.axios.get(items.url).then(async (resp) => {
              this.pokemons.push(resp.data)
              console.log(this.pokemons);
            })
          })
          this.loading = false;
        })
        .catch((error) => {
          console.warn(error);
        })
    },
  },

  mounted() {
    this.getData()
  },
}
</script>

<style scoped
       lang="scss">
       .modal-backdrop {
         position: fixed;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         background-color: #bfbfbf1e;

         justify-content: center;
         align-items: center;
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

         &-close {
           border-radius: 50%;
           color: #ffffff;
           background: #ffffff00;
           display: flex;
           align-items: center;
           justify-content: center;
           position: absolute;
           top: 7px;
           right: 7px;
           width: 30px;
           height: 30px;
           cursor: pointer;
         }

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
           }
         }
       }
</style>