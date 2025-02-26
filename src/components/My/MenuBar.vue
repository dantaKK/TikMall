<!-- <template>
    <div>
        <section
          class="rounded-xl mt-[0.5rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border "
        >
  
          <div class="topbar flex justify-around mt-[0.5rem]">
            <div
              class="topbar-item flex flex-col items-center  "
              v-for="item in items"
              :key="item.title"
            >
              <div class="topbar-item__icon">
                <van-icon
                  class="iconfont text-[1.5rem]"
                 
                  class-prefix="icon"
                  :name="item.icon"
                  
                />
              </div>
              <div class="topbar-item__text">{{ item.title }}</div>
            </div>
          </div>
        </section>
    </div>
</template>

<script setup lang="ts">
//接口定义类型约束
import { defineProps } from "vue";
//接口定义类型约束
interface items  {
  title: string;
  icon: string;
  color: string;
}
// //接收父组件传递的数据

const props = defineProps<{
  items: items[];
}>();
</script>

<style  scoped>

</style> -->