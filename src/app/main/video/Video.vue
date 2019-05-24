<!--
 * @Description: Do not edit
 * @Author: liuwei
 * @Date: 2019-04-13
 -->
<template>
  <div class="mydiv">
    <div class="mydiv0">
      <draggable v-model="myArray" @update="update" group="people">
        <transition-group type="transition" name="flip-list">
          <div
            v-for="(element,index) in myArray"
            :key="element.id"
            class="mydiv1"
            @click="removeAt(index)"
          >{{element.name}}</div>
        </transition-group>
      </draggable>
    </div>

    <div>haha</div>

    <div class="mydiv2">
      <draggable v-model="myArray1" group="people">
        <transition-group type="transition" name="flip-list">
          <div v-for="element in myArray1" :key="element.id" class="mydiv3">{{element.name}}</div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "components/draggable/vuedraggable";
export default {
  data() {
    return {
      items: ["哈哈1"],
      myArray: [
        {
          name: "1",
          id: 1
        },
        {
          name: "2",
          id: 2
        },
        {
          name: "3",
          id: 3
        },
        {
          name: "4",
          id: 4
        },
        {
          name: "5",
          id: 5
        },
        {
          name: "6",
          id: 6
        },
        {
          name: "7",
          id: 7
        },
        {
          name: "8",
          id: 8
        },
        {
          name: "9",
          id: 9
        }
      ],
      myArray1: [
        {
          name: "10",
          id: 10
        },
        {
          name: "11",
          id: 11
        }
      ]
    };
  },
  components: {
    draggable
  },

  mounted() {},
  methods: {
    update(val) {
      console.log("update", this.myArray);
    },
    removeAt(index) {
      this.myArray.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.mydiv0 > div {
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
}

.mydiv1 {
  width: 25%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  display: inline-block;
  outline: 1px solid red;
}

.mydiv2 > div {
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
}

.mydiv3 {
  width: 25%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  display: inline-block;
  outline: 1px solid red;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>
