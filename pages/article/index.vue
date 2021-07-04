<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <comments :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle } from "@/apis/article";
import Markdown from "markdown-it";
import ArticleMeta from "./components/meta.vue";
import Comments from "./components/comments.vue";

export default {
  name: "Article",
  components: { ArticleMeta, Comments },
  async asyncData({ params }) {
    const { data } = await getArticle(params.slug);
    const { article } = data;
    const md = new Markdown();
    article.body = md.render(article.body);
    return {
      article,
    };
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: "description", // 为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，利用 hid 键为 meta 标签配一个唯一的标识编号
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>