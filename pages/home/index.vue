<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'your_feed' }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      page,
                      tab: 'your_feed',
                    },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      page,
                      tab: 'global_feed',
                    },
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  :class="{ active: tab === 'tag' }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag,
                    },
                  }"
                  class="nav-link"
                  exact
                  ># {{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name: 'profile',
                    params: {
                      username: article.author.username,
                    },
                  }"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{
                  article.updatedAt | date("MMM DD, YYYY")
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>{{ article.body }}</span>
            </nuxt-link>
          </div>

          <!-- 页码 -->
          <nav>
            <ul class="pagenation">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{ active: item === page }"
              >
                <nuxt-link
                  :to="{
                    name: 'home',
                    query: {
                      page: item,
                      tag,
                      tab,
                    },
                  }"
                  exact
                  class="page-link"
                  >{{ item }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                v-for="item in tags"
                :to="{
                  name: 'home',
                  query: {
                    tag: item,
                    page,
                    tab: 'tag',
                  },
                }"
                :key="item"
                class="tag-pill tag-default"
              >
                {{ item }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticles,
  getFeedArticles,
  addFavorite,
  deleteFavorite,
} from "@/apis/article";
import { getTags } from "@/apis/tag";
import { mapState } from "vuex";

export default {
  name: "Home",
  watchQuery: ["page", "tag", "tab"],
  // 文章列表需做 SEO
  async asyncData({ query, store }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 5;
    const { tag, tab = "global_feed" } = query;
    const loadArticles =
      tab === "your_feed" && store.state.user ? getFeedArticles : getArticles;
    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag,
      }),
      getTags(),
    ]);

    const { articles, articlesCount } = articleRes.data;
    const { tags } = tagRes.data;

    articles.forEach((item) => (item.favoriteDisabled = false));
    return {
      articles,
      articlesCount,
      page,
      limit,
      tags,
      tag,
      tab,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit) || [];
    },
    ...mapState(["user"]),
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 添加点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false;
    },
  },
};
</script>