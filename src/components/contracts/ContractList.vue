<template>
  <div>
    <h2 class="text-2xl mb-6">ตรวจสอบสถานะการกู้ยืม</h2>
    <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
      <a slot="status" slot-scope="text" href="javascript:;">
        <a-tag :color="statusToColor(text)">{{statusToText(text)}}</a-tag>
      </a>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "เลขที่การกู้ยืม",
    dataIndex: "loanNumber"
  },
  {
    title: "สถานะ",
    dataIndex: "status",
    scopedSlots: { customRender: "status" }
  }
];
const data = [
  {
    key: "192456968",
    loanNumber: "192456968",
    status: "approved"
  },
  {
    key: "192456796",
    loanNumber: "192456796",
    status: "approved"
  },
  {
    key: "192456965",
    loanNumber: "192456965",
    status: "waiting"
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    statusToColor(status) {
      if (status == "approved") return "green";
      else if (status == "waiting") return "orange";
    },
    statusToText(status) {
      if (status == "approved") return "อนุมัติแล้ว";
      else if (status == "waiting") return "รออนุมัติ";
    }
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === "Disabled User", // Column configuration not to be checked
            name: record.name
          }
        })
      };
    }
  }
};
</script>
