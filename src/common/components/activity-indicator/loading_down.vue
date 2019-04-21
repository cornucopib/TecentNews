<template>
  <div
    class="loading_down"
    ref="loadingDown"
  >
    <div class="animation-container">
      <div
        class="red_ball"
        :class="{stop:isDefault,running:isRunning}"
      ></div>
      <div
        class="yellow_ball"
        :class="{stop:isDefault,running:isRunning}"
      ></div>
      <div
        class="blue_ball"
        :class="{stop:isDefault,running:isRunning}"
      ></div>
    </div>
    <div
      class="update-time-container"
      v-if="hasRefreshTime"
    >
      <div class="update-time-hint">
        {{ $t('custom_components.update_time') }}
      </div>
      <div class="update-time-value">
        {{ update_time_text }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'esales-pull-refresh-animation',
  data() {
    return {
      update_time: '',
      update_time_text: ''
    }
  },
  props: {
    isRefreshing: {
      type: Boolean,
      default: false
    },
    isRefreshActive: {
      type: Boolean,
      default: false
    },
    hasRefreshTime: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDefault() {
      return !(this.isRefreshing && !this.isRefreshActive)
    },
    isRunning() {
      return (this.isRefreshing && !this.isRefreshActive)
    }
  },
  watch: {
    isRefreshing(newVal, oldVal) {
      //如果正在刷新
      if (newVal) {
        let nowTime = new Date().getTime();
        console.log("当前时间", nowTime)
        console.log("上次更新时间", this.update_time)
        let newTime = (nowTime - this.update_time) / 1000;
        console.log("更新时间差", newTime)
        if (newTime < 60) {
          this.update_time_text = this.$t('custom_components.just_now') + ''
        } else if (newTime > 60 && newTime < 3600) {
          this.update_time_text = parseInt(newTime / 60) + this.$t('custom_components.m_ago')
        } else if (newTime > 3600 && newTime < 3600 * 24) {
          this.update_time_text = parseInt(newTime / 3660) + this.$t('custom_components.h_ago')
        } else if (newTime > 3600 * 24) {
          let d = new Date(this.update_time);
          this.update_time_text = formatDate(d);
        }
        this.update_time = nowTime;
      }
    }
  },
  mounted() {
    this.update_time = new Date().getTime()
    console.log("下拉刷新高度", this.$refs.loadingDown.clientHeight)

  },
  methods: {
    formatDate(d) {
      var y = d.getFullYear()
      var m = d.getMonth()
      var d = d.getDate()
      return y + '年' + (m + 1) + '月' + d + '日'
    }
  }
}
</script>

<style scoped>
.loading_down {
  margin: 0px auto;
}

.animation-container {
  margin: 0 auto;
  width: 60px;
  height: 12px;
  position: relative;
}

.red_ball {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f25e51;
}

.red_ball.stop {
  -webkit-animation: red_ball 1.8s infinite linear;
  animation: red_ball 1.8s infinite linear;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.red_ball.running {
  -webkit-animation: red_ball1 1.8s infinite linear;
  animation: red_ball1 1.8s infinite linear;
}

.yellow_ball {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  left: 24px;
  background-color: #f6af39;
}

.yellow_ball.stop {
  -webkit-animation: yellow_ball 1.8s infinite linear;
  animation: yellow_ball 1.8s infinite linear;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.yellow_ball.running {
  -webkit-animation: yellow_ball1 1.8s infinite linear;
  animation: yellow_ball1 1.8s infinite linear;
}

.blue_ball {
  position: absolute;
  width: 12px;
  height: 12px;
  left: 48px;
  border-radius: 50%;
  background-color: #1ea518;
}

.blue_ball.stop {
  -webkit-animation: blue_ball 1.8s infinite linear;
  animation: blue_ball 1.8s infinite linear;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.blue_ball.running {
  -webkit-animation: blue_ball1 1.8s infinite linear;
  animation: blue_ball1 1.8s infinite linear;
}

.update-time-container {
  text-align: center;
  line-height: 12px;
  font-size: 0px;
  height: 12px;
  margin-top: 10px;
}
.update-time-hint {
  color: #999999;
  font-size: 12px;
  text-align: center;
  display: inline-block;
  height: 12px;
  line-height: 12px;
}

.update-time-value {
  color: #999999;
  font-size: 12px;
  text-align: center;
  height: 12px;
  display: inline-block;
  line-height: 12px;
}

@-webkit-keyframes red_ball {
  0% {
    left: 0;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 48px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 24px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 0;
  }
}
@keyframes red_ball {
  0% {
    left: 0;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 48px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 24px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 0;
  }
}

@-webkit-keyframes red_ball1 {
  0% {
    left: 0;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 48px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 24px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 0;
  }
}
@keyframes red_ball1 {
  0% {
    left: 0;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 48px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 24px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 0;
  }
}

@-webkit-keyframes yellow_ball {
  0% {
    left: 24px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 0;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 48px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 24px;
  }
}
@keyframes yellow_ball {
  0% {
    left: 24px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 0;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 48px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 24px;
  }
}
@-webkit-keyframes yellow_ball1 {
  0% {
    left: 24px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 0;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 48px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 24px;
  }
}
@keyframes yellow_ball1 {
  0% {
    left: 24px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 0;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 48px;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 24px;
  }
}

@-webkit-keyframes blue_ball {
  0% {
    left: 48px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 24px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 0;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 48px;
  }
}
@keyframes blue_ball {
  0% {
    left: 48px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 24px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 0;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 48px;
  }
}

@-webkit-keyframes blue_ball1 {
  0% {
    left: 48px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 24px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 0;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 48px;
  }
}
@keyframes blue_ball1 {
  0% {
    left: 48px;
  }
  16.7% {
    left: 24px;
  }
  33.4% {
    left: 24px;
  }
  50.1% {
    left: 24px;
  }
  66.8% {
    left: 0;
  }
  83.5% {
    left: 24px;
  }
  100% {
    left: 48px;
  }
}
</style>
