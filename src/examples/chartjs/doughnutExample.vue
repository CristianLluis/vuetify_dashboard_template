<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  mounted() {
    this.gradient1 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient1.addColorStop(0, "rgba(255, 248, 0, 0.7)");
    this.gradient1.addColorStop(0.5, "rgba(255, 19, 97, 0.7)");
    this.gradient1.addColorStop(1, "rgba(68, 16, 122, 0.7)");
    this.gradient1.addColorStop(1, "rgba(35, 21, 87, 0.7)");

    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2.addColorStop(0, "rgba(255, 0, 102, 0.7)");
    this.gradient2.addColorStop(1, "rgba(164, 69, 178, 0.7)");

    this.gradient3 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient3.addColorStop(0, "rgba(143, 211, 244, 0.7)");
    this.gradient3.addColorStop(1, "rgba(132, 250, 176, 0.7)");

    this.gradient4 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient4.addColorStop(0, "rgba(72, 1, 255, 0.7)");
    this.gradient4.addColorStop(1, "rgba(121, 24, 242, 0.7)");

    this.renderChart(
      {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: [
              this.gradient1,
              this.gradient2,
              this.gradient3,
              this.gradient4
            ],
            data: [40, 20, 80, 10]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>
