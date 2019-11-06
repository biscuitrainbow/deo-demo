<template>
  <div>
    <a-steps :current="current" class="mb-8">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>

    <div class="steps-content">
      <div v-show="current==0">
        <a-form layout="vertical" class="mx-auto">
          <a-form-item label="เลขบัญชีผู้ประกอบการ">
            <a-input />
          </a-form-item>

          <a-form-item label="ที่อยุ่">
            <a-input />
          </a-form-item>

          <a-form-item label="เบอร์โทร">
            <a-input />
          </a-form-item>

          <a-form-item label="อีเมลล์">
            <a-input />
          </a-form-item>

          <a-form-item label="โทรสาร">
            <a-input />
          </a-form-item>

          <a-form-item label="ผู้มีอำนาจทำการแทน/ผู้รับมอบอำนาจ">
            <a-input />
          </a-form-item>

          <a-form-item label="สำเนาบัตรประจำตัวประชาชน">
            <a-upload
              v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
              name="logo"
              action="/upload.do"
              list-type="picture"
            >
              <a-button>
                <a-icon type="upload" />คลิกเพื่อเลือกไฟล์
              </a-button>
            </a-upload>
          </a-form-item>

          <a-form-item label="สำเนาทะเบียนบ้าน">
            <a-upload
              v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
              name="logo"
              action="/upload.do"
              list-type="picture"
            >
              <a-button>
                <a-icon type="upload" />คลิกเพื่อเลือกไฟล์
              </a-button>
            </a-upload>
          </a-form-item>
        </a-form>

        <div class="w-full">
          <div class="steps-action mx-auto flex flex-row-reverse">
            <a-button v-if="current < steps.length - 1" type="primary" @click="next">ต่อไป</a-button>
            <a-button
              v-if="current == steps.length - 1"
              type="primary"
              @click="$message.success('Processing complete!')"
              class="ml-4"
            >บันทึก</a-button>
            <a-button v-if="current>0" style="margin-left: 8px" @click="prev">ย้อนกลับ</a-button>
          </div>
        </div>
      </div>

      <div v-show="current == 1">
        <a-form layout="vertical" class="mx-auto">
          <a-form-item label="วงเงิน">
            <a-input addonAfter="บาท" />
          </a-form-item>

          <a-form-item label="จำนวนหลักสูตร/สาขาวิชาชีพ">
            <a-input addonAfter="หลักสูตร" />
          </a-form-item>

          <a-form-item label="ข้อมูลเพิ่มเติม">
            <a-textarea :autosize="{ minRows: 3, maxRows: 6 }" />
          </a-form-item>

          <a-form-item label="หลักค้ำประกัน">
            <div class="dropbox">
              <a-upload-dragger
                v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
            },
          ]"
                name="files"
                action="/upload.do"
              >
                <p class="ant-upload-drag-icon">
                  <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">ลากไฟล์มาที่นี่เพื่ออัพโหลด</p>
                <p class="ant-upload-hint">สามารถส่งหลักฐานได้มากกว่า 1 ไฟล์</p>
              </a-upload-dragger>
            </div>
          </a-form-item>
        </a-form>

        <div class="w-full">
          <div class="steps-action mx-auto flex flex-row-reverse">
            <a-button
              v-if="current < steps.length - 1"
              type="primary"
              @click="next"
              class="ml-4"
            >ต่อไป</a-button>
            <a-button
              v-if="current == steps.length - 1"
              type="primary"
              @click="$message.success('Processing complete!')"
              class="ml-4"
            >บันทึก</a-button>
            <a-button v-if="current>0" style="margin-left: 8px" @click="prev">ย้อนกลับ</a-button>
          </div>
        </div>
      </div>

      <div v-show="current == 2">
        <div class="w-full flex">
          <div class="w-2/5">
            <a-form layout="vertical">
              <a-form-item label="เอกสารประกอบการพิจารณา">
                <div class="dropbox">
                  <a-upload-dragger
                    v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
            },
          ]"
                    name="files"
                    action="/upload.do"
                  >
                    <p class="ant-upload-drag-icon">
                      <a-icon type="inbox" />
                    </p>
                    <p class="ant-upload-text">ลากไฟล์มาที่นี่เพื่ออัพโหลด</p>
                    <p class="ant-upload-hint">สามารถส่งหลักฐานได้มากกว่า 1 ไฟล์</p>
                  </a-upload-dragger>
                </div>
              </a-form-item>
            </a-form>

            <div class="w-full">
              <div class="steps-action mx-auto flex flex-row-reverse">
                <a-button v-if="current < steps.length - 1" type="primary" @click="next">ต่อไป</a-button>
                <a-button
                  v-if="current == steps.length - 1"
                  type="primary"
                  @click="$message.success('Processing complete!')"
                  class="ml-4"
                >บันทึก</a-button>
                <a-button v-if="current>0" style="margin-left: 8px" @click="prev">ย้อนกลับ</a-button>
              </div>
            </div>
          </div>

          <div class="mr-16"></div>

          <div class="w-full">
            <h2 class="mb-2">เอกสารที่อัพโหลดมาแล้ว</h2>
            <a-table :columns="columns" bordered class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "หมวด",
    dataIndex: "category"
  },
  {
    title: "ชื่อ",
    dataIndex: "name"
  },
  {
    title: "แก้ไขล่าสุด",
    dataIndex: "lastUpdated"
  }
];

export default {
  data() {
    return {
      columns,
      current: 0,
      steps: [
        {
          title: "ข้อมูลเบื้องต้น",
          content: "First-content"
        },
        {
          title: "จุดประสงค์การกู้ยืม",
          content: "First-content"
        },
        {
          title: "เอกสารประกอบการพิจารณา",
          content: "Second-content"
        }
      ]
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    }
  }
};
</script>

<style>
.ant-form.ant-form-vertical {
  max-width: 450px;
}

.steps-action {
  max-width: 450px;
}
</style>