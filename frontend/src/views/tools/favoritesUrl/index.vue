<template>
  <div class="divmain">
    <home/>
    <div style="width: 1000px;height:200px;font-size: 0;">
      <div style="width: 30%;height: 500px;overflow-y:auto">
        <template>
          <a-tree
            :load-data="onLoadData"
            :tree-data.sync="treeData"
            :expandedKeys.sync="expandedKeys"
            @select="selectTree">
            <template #title="{ nid: treeKey, title,leve }">
              <a-dropdown :trigger="['contextmenu']">
                <span>{{ title }}</span>
                <template #overlay>
                  <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey,leve)">
                    <a-menu-item v-if="leve < 2" key="1">
                      <a-tag color="#87d068">
                        <a-icon type="plus"/>
                        新增分组
                      </a-tag>
                    </a-menu-item>
                    <a-menu-item v-if="leve > 0" key="2">
                      <a-tag color="#2db7f5">
                        <a-icon type="edit"/>
                        修改
                      </a-tag>
                    </a-menu-item>
                    <a-menu-item v-if="leve > 0" key="3">
                      <a-tag color="#f50">
                        <a-icon type="close"/>
                        删除
                      </a-tag>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </template>
          </a-tree>
        </template>
      </div>
      <div class="floatRight">
        <template>
          <a-list
            class="demo-loadmore-list"
            item-layout="horizontal"
            :data-source="urlList"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a slot="actions">
                <a-button type="link" @click="delUrlItem(item.item_id)">
                  删除
                </a-button>
                <a-tag color="#2db7f5" @click="onCopy(item.item_url)">
                  复制到剪切板
                </a-tag>
                <a-tag color="#2db7f5" @click="createWindow(item.item_url)">
                  访问
                </a-tag>
              </a>
              <a-list-item-meta
                :description="item.item_url"
              >
                <a slot="title" href="#">{{ item.item_title }}</a>
                <a-avatar
                  slot="avatar"
                  :src="item.item_ico"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </template>

      </div>
    </div>
    <a-button type="primary" shape="circle" class="floatBut" @click="showVs2">
      +
    </a-button>
    <!--    添加/更新框-->
    <template>
      <div>
        <a-modal v-model="visible" title="添加分组">
          <template slot="footer">
            <a-button key="back" type="danger" @click="handleOk">
              保存
            </a-button>
          </template>
          <template>
            <a-form-model ref="addForm">
              <a-form-model-item has-feedback label="NID" prop="nid" disabled>
                <a-input v-model="addForm.nid"/>
              </a-form-model-item>
              <a-form-model-item has-feedback label="名称" prop="title">
                <a-input v-model="addForm.title"/>
              </a-form-model-item>
              <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              </a-form-model-item>
            </a-form-model>
          </template>
        </a-modal>
      </div>
    </template>

    <!--    添加网址-->
    <template>
      <div>
        <a-modal v-model="visible2" title="添加网址" width="600px">
          <template slot="footer">
            <a-button key="back" type="danger" @click="handleOkItem">
              保存
            </a-button>
          </template>
          <template>
            <a-form-model ref="addUrlForm" layout="inline">
              <a-form-model-item>
                <img :src="src" height="32px" width="32px"/>
              </a-form-model-item>
              <a-form-model-item has-feedback label="名称" prop="item_title">
                <a-input v-model="addUrlForm.item_title"/>
              </a-form-model-item>
              <a-form-model-item has-feedback label="网址" prop="item_url">
                <a-input v-model="addUrlForm.item_url"/>
              </a-form-model-item>
            </a-form-model>
          </template>
        </a-modal>
      </div>
    </template>

  </div>
</template>
<script>
import {ipcApiRoute} from "@/api/main";
import reqwest from 'reqwest';
import VueClipBoard from 'vue-clipboard2'
import Vue from 'vue'
import Home from "@/views/base/common/home";
Vue.use(VueClipBoard)



const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const treeData = [
  {
    title: '我的收藏夹',
    nid: '0',
    leve: 0,
    children: [],
  },
];
export default {
  components: {Home},
  data() {
    return {
      src: 'data:image/x-icon;base64,AAABAAEAAAAAAAEAIAB2RwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAEAAAABAAgGAAAAXHKoZgAAAAFvck5UAc+id5oAAEcwSURBVHja7V0HeFNl979lunF/fvp3S1uG7CZtScoScfspq4ONICJDQVFok5YpooC4cYCyStmyVPZoUuRTcX3uASLKapO20LRAef+/89570yRN2yRN0zR5z/P8nntP0pHce895zznvGZIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIEuVKxuTOgl2HSSTaT3s7b+FFX9r76Gv2MKZb/vCBBgoJSsB2E1qSTBdlBuGWB10cUZ+si8F498BdCoC+HArgW5/8CroWw41xH/DXA1cDlNv5z+vrF2fjdvY5KQWf/X7acBP6aIEGCakPgVUAYC3fHk/DXBxpBcC/G+1cCtwPdgX4Q3HF4bxrwBvgl+J11OK4HPsLPrwO/Fudr8XOrwS/FOf3cdJyPAu6lv4X/dQXevwg/26D0M8WScLAcBAkSVJOCn2Nf0fmx0JwQgZUcq7WuKfhuEMzBEPDJOM8EvgKOA/nAKcAGnAHOAqXA+UpQqvzcGeX3CoBjUAAHIPTv4nwk/k8nnN9QZOoIpdNRcSE6CUUgSJA/iFbWM4pAFTv66Cb9JUAUzu8DxuDn3sd7n+G1v6AACsCfw+uMgHMOP/OkIE4DB/F/N+H4LI6dgSaucQRBggR5usLDnC7J7ujky5fIgtRA9s11HXEci1V4AY67IYh/4ufOcAE1ybCZFIENKE+Wgu5H4D18rkeVOEKE7KLopNNm+bsIEiSoCp+ecDo7jhRAQ3lF1beWV1j9GuAXZeVlQQqyDP6BS7IEx674/BeWmLso36uLuNGCBLkKPnMI5Cmr5tUQ/k5YOZ+DAG1RfPhiRbhYHQF91r+BufheLZm5U4RwCQQJqmDFh5A0wrEl8BgEfzHwB4TfVoM+fKB4G77bLuBhnF/Mtw0VCBIUnkJvsq/29ZU9+LuBl/FaNlBQOz58jccIfsd3fAbnV9mUbUOROyAo5IkedKs5xp55V2yKBxIa4uG/Ea8NAWgf/hBwrg6Z977iJDBFTjJSkpVEYFBQeJj5JPy6C3FsCwvgOZu8P38Kr513NJ+LTc7mdOjxsHB4XEB3ZVG2TiIIEhRyq/5pc7xjss4lQBcIw3QogC/xfpFdKBxN5nDhzTorrkMqXr+Cb3WahCsgqI6Rxmjl0BotktaAc0M+Py5a+rJUkN1VOm2Kj+BpuCb9gzi+BfyEh10x83UyTOrKWGd4JUNQJ0Pmff17R20m/YgSk74RV5L79KLYSFDwkJYLd0Ww2M81EHptukV6Zv56/BaTHpzxc33r3m6Ug98ZWIiHmxJ1Sm3Kw4+HXl4Rg5Dn0XuT/hzObZRNiPdzgT+AvTDblwHv4PxN4HXgNTn7UL8N+BU/Tz97Gr9f6vn/1x3A3+xc8JnO7iYJElSLq7qFwy7cCmJSc6W4CUexwlsa4fUroABuxLEp3muGY5sOhoK4tmmnuibNOnDftrXjBxVmd1mg7N2fK3Z4+B1N4qDgTXaTnGoEDuFohoDSZx8P9IBwNlMy+prYaAvPrL/QxuMYOJoTLsDxIuAy4Cq8dycwFH9vBfjflBqC8v/PzGMelNNQCFioIAm4qdicIFEtgSBBAVzlLRwadSXHMVYW/guB64EWQCeNwdIbx1HANOBDYBvwJUz+H2IM+b90mnz0jzGvbju8ZkXGP3/vfDC/iFbBoPbJ+fEkkINzWtXHKjGK22SB1tU7999uUrFS5lvsnKjk0DvAtQRZXw9CfjX+V2fgFV4noP5/bgXBQjDzOoU8m1xcVKoogXFKqrN4KAXVkDmfbuU+uryyKyv9vDOkABpAAVwJBUDC3gt8Ot57B+cf4fUcHH/G7x3H8QzAHKFPP84Gz9nHPlg6h/20JZGdNnViJaq/G3Q+PJnmfBvOTNl5QBJeb8VLhk1lDUJkge7otTnunOPAdzwuAXrjte1URUhCXyy7FTYlhuDw+fTf4f3mZ5VmJYIE+UfwDWVCz/EimfFWCLzlYuA6vNYVmAQsB74GjsHMh6BbGN6XBd0gCzusAH4ORcFijXnswRm/sLkL3mfffdqfncruDMHvyAUtGHx6NQFH4WnH4SAFIrHq9gYiyZw/Yy5rGlKUo/dbUg63BvYp1Yv7OlHjkTvxP97jMQXa8nT/+UtwbgAaCwUgyM8BPIsUZyyoj/P/A7oBT0O4lwC/4DwfKIZQlzqu7FzYXXiNIR9KIZ/dO+0PlvbWWvbF5sdY/t5uDit+7fv0JRz885wrydEdPpPTcSNeHwUhi+QdgPbpIlxN95oQOHIHzn4mr+ZnZavg3zjP4n0FKv78X/CiJ74tKIKBgqoZtY8x8GDelVjREyDs43G+CcrgEI424Ly6sttRCQ8/n3We/A8b/ep2tmGVgR3deb8a0HLKf6/FfXVWktORFe7txA6se4QtfefxU3Pnjps/Y+b4uBWvP9Kw+/DXpccnvSBtWDxUYj9GByzabrNXNvJjG+4OVPR9TDpKihp3en8XoQAEeWriW2Q47skbrZcCLbGqP4nXllKgzu6/u6zsVfFk7usyTrB+L3/BliybxX7b2ltZaVXz1WElqw0fn7+mZ3m7u7B9q3uzl15+hvUcO4+1Slly7vY+WQeb9snc1LT3EmPTXh92ikrMuiq6/4Z6TR99X4pKWS017f2h1PNLVuP3SA0Y5u/j1YC98B0OVvJ9qNz5Oq40hCsgqKKVvoNd4Cm4ly9p0q31wV8L/iEI/NsUoYfZXqAKsZNZ7wGvMcj83VMPsRnvZrKvNg8u8/NNzsJftsUVGB9ftTzodQsEP2dVbzZ15kTW44m3WMvkpaxp3+UsUkUiHTOLI/su+z0qcXlWdMqax5oP3HxLdL81jZr1/whKYJF0+yPvSrqXmXTrA/Nq3BKw5eibUCuxCvMiTLpf8N26lohCIUEVUbwi/LRdp0nPbwihjQJG4rV9OJLQn9O4mPPufPqKePL19RnH2JPzdrItaycwy57uDiuUvuyhdShy4YG3gPj48uc4tqMb+3RpPzY+YzKLH/I+a560zC7wUYmy8EcllkHhS4GiqKQV3wPTI/ss6XBHzwUXQylAESyWbr13nnRHzw9qTAEUmTuq1kB3mP+/V/B9KVPymSKzvp5QAILsBAElYbcn5gAU1GtFAT1gNxd8L3x6dzwJPh17vfgde/2D+ey3bX34tp6nlW416eMXKz7+iZ3d2JZl/djEqQamG/oea5aUqa7yLMpR6KviE5eX4He+juyz9IWmfZbo7ui58CL8HQm8xBisgQdfrQElYO8TeA2Ee5XSU7D89zXrF1KNgLolKSiszX2LPe1WUQAXAO3Ap2ppj95gOe2NT18Z323qX2zim+vZ3vVj7NF9pyq2cj5/AGIAyv/P3dWV7VyexFKnpbGuw+dzgSdTnws2F3BllfeePwf34DvgVaAT0ISue1RilhTdf50UnbTKv/EAOcJPLcufBIrcfn+Tbj/QVCiAMF/xHzAwZQ8/n9AQgt8cfDqE9QugyBuf3j0vr/pxxjz2yAs/sGWZM9nhHf+xr7i2Cnx9WwBiAKpAFOztxD5f25NNeeF5CP47WPGXOfn4UYmZHNXi+xIPRZCY+ROsgDejklfFNRuw8cLIXh/AIljGrYE7Hn3ffwogmzcDaaXUDpSPcZj1h6mOwmbqKBRAeEb2sdqnyqt+zDhLBI63AuOhAGjfvsQxsOeLj6/+Pm3tdZ1yhKW+tY4d2DxECfLpKvTxq+L95fPTZzidncC+/ug/bOZLz7LOiuA7+vUV+Pj+4M9FJWX9FZW8cm5U0ooWkb2XNrij14fSzffM9JtboLgBVxTTbAF318OsPwEF0bPEnBAhFEA4+vq0rSen7TaBsD4KbPCHj+/IQ5mwxFlf8RRevur7odtNdX1+ddX/7eP72IdvP6Fu5/nm41eXT1xeDKWQHdln6eO3PfTm9Q9vYFLr0V9JManH/BILAC4GllYQA6ABJgNPm3T1bKI6MDy29eKNhXJ+vqwAqOIOfr7lDRwP+cvHV1d+WvUnvLGJ5Wx4AiZ2F/uqX7WPX3MxAHr4/9nena1dOJgNe34ma9d/EWvaJ6tMKH338X3k5eBiVMrq3JbDdi9t/9zh7rGTiy7UGPKUgKxcS+GTAoAbUGTWNcZxRrGJFwO5xgBsNjlG0ECUB4eB8KvokH6CHiray38S+BwK4Gz1fHznfX1SBg+/8BN7b/Gr7M/tj9gfOm99fX/FANT/n7+nM/vvmp7smYwM1nHI+/YAn998fG94UgBJWSw6ZS27c/he1vbpH1iHiX+XQvB/htU0Edfz5g6pufUc75uPLgBV/j1Frc7LxwCoaQq1Q9c3FC5AmAi/1pjfGMf7oADI3D9VfR/feV8/Pv0EG/3qNpa9YRR8/S7Oufs++vzViQGoiTw/bX6AzZ49nnUe9o68pde3xn18NzwPArLo5FWs+aBPWKsnP2ftn/uTadJymdbodF2LgWwgEbiM3zclE9N7BZBQH6v8EFyHAjfX5zz46bi+jUUuQCgLf1l57nV40Mbi+CtQ6g8fX+Up0Ndj2kH2wrtL2S9b+7IiU0KNdbz1zOfXcZeD9vPXLBzCBk+YxVr3W6ysvgH08ftm2hGdvJq1GLKNtRnzNevw/F9QmLk8RmLPoOSVkXb+PPAnru0LON6inVrktSXAW4JnUzt0ZwXgcL1IAcwCGovZASEY4ZeFngf66uG8DVbrd3C0+MPH1zqY/bS9lzTrAMtaPoMd332vD/v6/o8BULHO/tW9WPqMSYq5r2TvBdzHXw4zfw1r+dhO1nbs/yD4f3MhLwuSWuyogLfhWq/EeWegIU/L5n0RLR5ZACWmBFUBFLq5XpQgRJONGwkXIISi+3Fq4Y4cSGoEJXAPHp4dGqq/N1TPx3fkeQEPTP5R83Zwk79Q2d6zmf3j63sbA1DjDBTkWzx/BHt49Ks8dbdp36zA+/gk/DD1Wz62g7Ud9yOLmXS0nPvkBchaOwDh74e/cQlZdGqjFQ9iADQQZSi1BXMTI6HA4ERct4YiCBhq/n5GASmBfwPjoACOKCZltXx8J+Gnev3pv7PZCz5gf+14GEKfIAu/H3x8X2IAJUqQL3tFXzZ84gusbf/FteDjy3x0Ckz9oST4P8G/P2H37zUugu09bzkBzCWXIGbWYamqAKFcFKSrX2yi/oH6Qjd5AGeoRRiuaQObaBceOsIfa7RSUk8b4D2s2nn+3dfP5w90yktfsFVZU9gJmPwOrbACAtf6fPrfhz69h81/fTS7b+QbLDoxs3Z8fC748PFh6vMV39mn9xNvKcL9WI3XOsemWxtwS2/iCbdKgPb2i8wdSQE85qgAHNyzIuBJ0SMwJPz90/wYKxfvdNfIzTTP+mtfX+UTJh9jE97cyHI2PuGS0VeTPr+bGIDyfymFd3dWIhtrnMLaD6A9/cD7+FFJK1mLIVsh+N/SVp7T6u2Bj+81r1gUX/JdAoPlQrVPg6sSULcBYUGNoj1/NzGAQj4yzaSvLwaG1OFVX5+m1OynWalk9248IAfI5Nf4YV/fMR34nmkH2ZwFC9mh7Y/KZrmpZn39CmMAiqvxN3x9yuS7Z+Rb9q29gO7jJ2axZv3Xs9ajvmQdnj9SHR/fV/wMDNFS4VYab8fGF4EyC0CehGyTA32lbmoBqHFpTwi/SAWuy5F+3k8fDwHOB+Ah/Mlf+/qq8FNjzv4v/5dtWj2J1+yXVFGvX5N8iRLhp+YcT6ZNg6+/KFC5+wovr/zN+n/EWj2xj3V47jCuUZ6ffHyf+BPAU7hvV1BrttiMU/x5cFAAFwEL3OVJ4Pw3QEMzA0UQsK4qgHRu+l0CPK6Vi3iYv3x+8vf1GcfZpLc+Yvs3Ducmf21OvC3hDTruYh+89QR7eNRr9uYcgdvXl/fyWw7bzdqN/4XFpJ2sAR/fJ/4YFEAGcK02jdKHZXeAAnsADRPZUkHehAn8bTbRHLSORvplXK6l1FGD9bC/c/nvmfYHe2Xh+w7pvIHy8cvzatUe7evHDPygbGUO1L5+0grWYvAW+PnfsZhJx7zZxw8Ij3MLnoE5wE2aifKzQas6ruOVwA8V5E0s5jMVzWJWYN0S/vR8tUHn1VgBDND8uf7M5Sc8OONntmjZyzzKX9aHP8C+vkln397bsrQfS3lmNmvBe/EFaF+/r5IynLKGtRqRw819beD9fM9hsBZqjZaFwA0pi5i0b8MIUgA3AccryJuYXGxKEHUAdcrk58E+nuhzDc5fgfYvdH4QXB9Qz3mNogwGwN//dM0EVqjk8jv55GZ9QPk/t/Rgc2aPZwmPvRfgff1Me3SfzH3K168lH99b/gzu4XKgqS7jBO0CxANWh9mEasPTPCiC5FO7Y0UzkLpCsWp6rwFmP+/YY8nz1+pB/n58+kk2ct4u9tnGETyrL5B7+66+/imY/OaVfdjTxilyUo+rr68KaQ3xFN2nYh3n6H5ZQo8miHmaxwAr7t349Nwbz+XE9cN9PO0mV+MAFEKMaAdWR8z+dunyUE3gYuA53PCj/gr40cNDwzjS56/i47cc++AHdPKO4ptSAc/y94bxVF7VLFdXZ8c23I4+erV5RcFQpV7LYbucVn37qDLV5w56nrtxp/QZx1/7dWufBbiuJeq1lVuC8+u9HLi6piYWCfITUW5/LPn8codeKuUdiNf+cW7XZWG+8lTC223KYTZ7wUIe7HMcv2X3yV0CczXDyw/n39vuZrNefpZ34m3ad7nLFl9mOTPdKfe+mnyz/hv4nj5l8QWxie8xDwugYO7C909Y9txVql5fBTQfML04u6vY/gt6BaAIf6yRJ/lQMcgf/vL5CRTsW758Bju5u0dZVl+AfX56OKl8eP+aXmxk6nS5PVffisx0/+/rUwpvy+F7WPsJh+x7+qGgAIinrkyLlr7M8pT8DSUGQM1A75FX/3ghZMG8+vMkn/SCelitHwS+8WfUmJJ7Nq5K5a25XQdyBNLft+7uwj76cBDr/dRcuSlnJQLvN59fyeRrPuhjnsIrb+3VDR/fG17DlfwvbGXWVFaQ3VVW8ibdFiiCG9X5AYKC1O/nCiDVUg9+XVec79Mqvl71hnJYWcf0k2z0qzuYecNIdpo37tDVwrRd+fzI1rvZvFee5q24y5v87nl/+PxUo3/nCLOy6jsKjqUO+vyV8dSsxcoenfkDz+Q8ld25GEpgomgDFtTbfRZJN7lQajvxJEX8b4XQ7nLq4FMNn1/N7Pvuk/72fnmB8fHL5/L/b8NDfPIOpfPKwp/pNu3WbzEApQFnswEbWJsx37CY1ON13sT3lKdYD23vQumfwPVvm7PhCenIzoeFsAWt6S/jWgjvfKeqvnLwzOenB+DuqX+yOQsWsKO77q+1fX1CYXYntmN5MksaN6dcH/6qzfhq7usP3c7aP3vQydcPCwVglGs6+s76+o/eL357+6Mzf8Tiki+ELWhNf0NeY6zY1L/vZEU32Js9fmreQV16ZeEPvL9vU/39PV34Ft9Do17jdfuRfT3196sXA4jut5a1GrlfbslVx/b1/ctbinE+Q8kl8anbsKCaEv40JeI/OT8CN+c+4EcnH577dhavYwDUontp5ossd08PCGPHwO3ru/j8h7f2YK/PG8t0Q993Kd2t3Of3OQbAfzeLd+Bt+9T3DsU7oeTj+8QfBYZp0/nOkn0upKBaXvntHXzlMdyfVFi446HPT7/3wPRf2Ecrjcyy5y678AfW55cTUH75+H5mnJ7K2g/4UB62mei5z+9TDKCvbPJTM04K9NG10ISRyV81b/kSykDfzpDPhT8mTSiA2lcABnt133saZTZf1ag4BpDy0pds69pnlDJeXS34/PL+vmllHzb0uZmsRfIyNya/t1t5nvn8zfp9xFqPOuBSuScUgMv5R3hebo/LyPeoy7CgGov620t7qanHE7y004Mb6t7fl5XA4Nn72M51TzsJf2AhV/FtXjyAPTrm1bLa/UR/wkU5KBZCiyFbWNunf2Qa1eQPKx/fG956Cpit9JMQ8YDaivg7NPbojvPvK/T5PYgBUKR3+NxsZtrwpDycI5C5/A7DNymfn9p1dX/8bXueva8+v6cxAL63/3i2UrYb1j6+xzzvKGTgE4gaKOnmQigDZ/ZbpPaTTvKLDlyLm7OYt++uqnmHG59fbd018OX97PNNw52EP5A+P0X6j26/i70xbywfyOGY3OOrz6+u9A4xgFIcz+L1MzgvAYqj+31U3Hr0VyUxqcfPKNumpcLk95S37AAitUaL+iwK4QyMAlCi/gZrfQj/cJz7UN5rUfZ4LWzEK3vYF5se4z36a2uf/+Cn97LUaWms3YBF5VZwX3z+SJkvBA5FJWZ9FZW0YhuwGOdz8dp0HA1RKWuebf3kF89oDLlpuBbTlc44i3C+Fdfna1ynw4q5KwTePW/DdZoeY8y/gCuANKEAAhj5zyNLoAXOd3t7A8sSPGTh37/x8RqdyVeVz//1+v+w8RkZrFW/JW5q970CVvisP6KSsrYAb0YlrxwVnbyqa1TSysjolLU3NOu/oUmzARsbRfdbVw/KIALnETGTjkfEz2ARuB40UbcRzNzLqDOOsqNyFzCWkqqgaLcBh+VBKQ5VkWEdE+D5AT9AaXaL5aPjhRUQuG0/o/VCYBbMfJvWYK3c53cTAyCzn5p47IfZbzPpA+vzK1t81K+PIv1DnnvRKdjnpY9/Dvg7MnHFVgj1pKjkVT2i+629tfmQrY2hBCQoAAkKQMJrEgReaj5ws9R80Cccbq6pHFsxlvXLl+fpWS/Ew34b+AeADNn0tR6X3S4RE8BxMXCdWoQmqMai/hYpFuZ/nLGAVqwE4C+vGnga5RtGwk/R/gObh9SKz0//jzr3bM9MZn2emuvUvMMLH/9sZGLWEQj9Qqz0D8Kcv6nZoM0NInsvkaJSVkPYN0jNh26Vmg3cVC1lG6s2VDHK/RVwbIzreive64nrScM3j+E+nAtnlwDP1Alci0FaQ159VXkKqgkFYG/wYbkBWK3O7fMWQ+eY2X9p5a+Fnn1qWu+6DwbzSr7oRDUy77GPT2b+jxD8udEpq9tD8C9uPvbLCPBSdMoarPQfSc2H7ZCaDf7Er1YXF351ko6BT06OwMN+KZRDAjAfQnAwbBWAbBHQxKGm6jUS5O9tP0Wzxhnz6+MGjARyvblhKvq9/AXb/dFYdtrUKfA1/Dk6lre7C1s8/3F21+Pzy0Zkee7j/wOz/gOY9F1J8K9o1tNu3rcYvIWb+AF0wbircP1TFjUJ60E8/KvkGoywjBFQAto0NTdAkJ8fOj7WWa70awl+b6W5/uV4+bXEWV+zLWuflYW/Fnz+4zvuYu++MYrplbZdHu/jJy4vhrm/JypxRSLM+2siEzO50BNF9/8oGOIxaj7GDbjWtCvzmb0SM4xiAsrIsa7yQiUShPxGMWl56oNWX45KW4u8GtqBm3T/9N/Yx6ufl1t214LPf3JXV97AI37wAnmP35PcfW72Z1kh+G9HJa9q1Xz0/yJoxW/z5JcBWe29yshMkx/4mLTcBhCIOJwvB06HmUtwDtdiLviLRIagn7P+lAaftDW1x6uSXkM+e2jGz2ztygx7v/6A+vww+//ccg97YdYE3qa74p597pRA1vcQ+GHw6y+L6rOMm/vNBm7kAb7gC9BaJZ3hNL9XrTIK6V5dCdP4ORz/CLM8gh/Ad4oRCsC//n+MMQ8ri+VJPGj5nt4QEv57p/3Oli57kQ/nDHRuPwX8fv/kPmacMUlO8PFuP/+zqOSV98PUv0D289dJd/T6MKhWfvf3St4LV9y1i2nwKhTBd5owiQlo5R2RF/DdLxIBQT9t/SkxgOtxNJdt51Xu89PD1mPaIfb+klcCX8+v9O37cdODbMLkdNa632JvfP6zEP6NMPkTuI/PI/tr61zMps1zx2TLzZDfEPfuPh63MVpKwyEmgO/6LaAVCsAfDxP5/wYL+f6DNa5pqZX4/AkZx9irH7zLju26r1zb7kDk9h/89B42xjCV3ZmyxEn4q6jXp5X/Ewh/u5vik6XI5NVS08TldTZwq45hjzMWUJahTitvlZ0Pg21B2hGYCgXQWCiB6gaXeMmv5RZc5C1aD8t6dRknWPrbq9jx3fc6DOsIRJ9+2ez/ASs/CT+v4/c0d7/v8vMQ/s3RyavbNr//LSkKK/9t/1koNavFKL9fdwoMlggcE8iKC4e8AOBXvN5MBAOrK/xT+HGo1sN9f8rvf/q1T9mPW5KdxzoHyOf/adMD7On0yXzl98LnPx+VlJUD4Y+JHrCpHiXzRCZnSdH914eIFVfA3YGYNMqUs96H+/VtGPQbKAYMvFeFUAA+KgBZe96Ah2dtVbn+aonvkDk5cpafYyttc2B8flr5Sfhb8lHcnu/zQ/i/g9l/f9OReyMo2Bfdf2PI3U+1xiA2Pa8B7tVgudIwxPMCDJb94FuIJqI+mo6xsgK4l6eZGty08XLw+Sni/+jM79mWNROUyj5XIQ1Gn59v9Z2A8D/ZbOCmRmT239HngxC+p2oqsZUqDo1hkCdgBYY5JkwJ8mi1ULaSjPmN8aBM86R9N0X8161Mt+/1l/P5TcHl8yt8cVTyytnNB26+LDplrdRy2O6QMfsrsgJ0E06r1t1VwAraNgvpmIDBslTOiRAKwCsFoFyw24FdVU1u6TblL/bGh28zy97ubnz+mosBVMPnV03/3Vj1W1H1Xsuh24IywacmLDtSBK2fP06BQQoKfhXKtQM4/k/eAREKwMuHhKrNrH14cYnbXH/5AtPIrpnvLWF/73zQPqLb2eevgRiAkttPST60z++tzy8rCm7692w+6OP6jrX54aHgLXJpd1peI9zHseDzNIbQzAsASoDxsen59dWaFkFVPSC8x5qFmlDM58kj7vb9lQKfsa9tZT9vSbQLv5PPX0MxALmwpxtLnzGJtXFJ8vGknp838UhasTC637pLKdEn2LP7aibIW6hkDFpvxP1cF9KpwgbrOiiBf/OdEGOeEPCqVgclnfQ2jZs8csdpvckvfcn2bRyhjG6uwuc3+S+3/9iOu9js2eNZG8rt96VnX1LWD1Epq/S33D21Vqv5gmGXR3H3egN/h3CtwBGgR0LGb8IC8EQBxBgs9fBgPFZhlBjC333qn2ydS4GPe5/ffzEAUjRUzz//9VEsbvAC731+NdU3acXMqP7rLibff+i3LKxdPWW81jVQCIth0ZWG6BwB6rj8AtBYxAE8WRkM1quVCPF5d/v+nSb/w2YvWGgP+lXu8/shBqD4/DSwY+k7jzP9Y17W8zvxWd9EJ6+Kh0VQ57P8/KMECiVtegEpg7ug/HNDd46A5QCe4eu0BjFPsPIVQVYAMTj/0Z3ZTxdz3OufsN+29a7a5/dTDEBt4Llx0UB294i3PK7nL1/fTxl/K95qNnDjxc36rRM3XCpLFYbANMFxcwjXCuRD8HvEZxyTYoxivLj7h2FyofpADIf2zC8n/IZ81v/lz9n+TY+7Ef6aiwGQ8O9ansSn9fg+m48n/fwVnbL6Qerf13zonmo17Aw5JZCeTwVDg2i8W4gqACoQmoLzBqJzcIXmP5WPWqh89BWNQ8NPVfjvnf47W501xWVun66GYwA63rq779NzeQPPavTtp9V/Q3S/df+O7r9OajZACL+zFcDnPFDDF1OI1gaQZbOGu7cGoQDKPwRpavaf9RZcsE9ct/xov//1D+ezk7t7uKT51mQMQMe+W/8wG/r8TLl1d/Vm89miklY903zQxw1aDP5U3HAXBaA0ELkQ932WNlT7BRgtVATVWm2YIsgl+KeRzf9Odv9fUQLUx3/0vO3szx2POK3mVfr81YgBUMT/r213s0nTDKx58lJf+va78iejU9Z2iOq9SIISEDfczf1vZ8ilbcEkCMrJEM0LOAEkkcLrMYeJm+76AHQexpXAcHX7jxAD07/vrG+YecPI6vn8XsUAdCx3V1c286VnWdv+ixThz6zWrD6Y/zujUtZcTu29BFW6JXhnWeenEGwaarS+qEnLixDbgQ6kKUsKoW6qcxyLfLpM/pstXDKX5e/t6pDt543P720MQN7uy3x3ONMOWljdWX2OmX8zopJXNxYKoGIXUAkA027Ah6HYM1DBWrx2nXAD3CgALff/rTvU+v44mP4T31zP/tz+iENPP299fu9iAEWwFDYvGsDuHvG27PP39dnnd1QA1qjkVQOiB39aL6qO9ferHSvAasSxJATnBhC+AWK1QgE43niL1CGVX5AECP9Btcqv94vfMtOGUWU9/bz1+b2MAZCy+HxNT5Y4bo6TEPvo8zvij+jk1brb7p8rov9VBgM5kuQJQyGZGpyH5z0l1pgrqgMdFUBsuoVGfg3DzT9FF6zz5H9YZuZMJdXXDz5/FTEAEv6fNj/ARkyaYV/Fq+XzO+X+rzBHpay+LSp5pdRy8FZxw6u0AqztsRD8HMI9A9NjDZYGIiNQdQHk4E8jXKjJQGlcei6b8MYmdnTX/X7w+SuPAdiUnzm6oztLnZbGWlNdv3/8/rLZf0kr10T3/+hf1PSj+UCxA+CBAqDpw/u0fOss5PoD0PE9WLtNRGGQo+lntFyM4yIy/VNe+lLJ9vOHz19VDEDH8nZ1ZW+/Nto+uScysXo+vxPPFcCKN5oNWH9J8yFb7RN2lX3vwPJqSy511mIQ8ho5FfxfeG1DSPYMlPNatgD/J7dMF26A+qA2iTHkZ3edcoQtWTaLnSpX5ef/GID69ynHv8vwd+wFPtX1+Z17/nELYEq7Z369SJtxupEmLa+xVu4X3zgG54Hk8RDyczx4/DxYeSiBayD8SyAspSHpAhj44JDmWmWKklAAuAjt0wqvw03/a9Jb69mRnQ/xwJ9ffX6Tq88vK4D/runJej/1in99fjufyaL7rWWtR3+1g+//GgiWF+lc5i2B5Y3O58HLW2YDX4SsAuAdka1dRJswhfrO/JoUQLtHZ35v2bnuaXvU3z8+f0UxAB07tOUe9szkDNYsKdO/fr9i+kcnr2StRv6XxaSeOK+UNtcqoAzOyzUWFoW3BjMfynMDaCcgGagX9oHAvetHS9J9TLpr6uFeb334ZmGeMsTTfz6/mxgAeMvuzmzOnHGsnZLp5zefX+UTs9idj2ezmIlHccPz1Zlxzi3NAsyH6iy+uhYDwPEM+Gc06daGYe8CjHp1u5SQcTRiyvys5w5u71nsV5/fbQxAru3fvHgA6zj0fUV4/ePzOzb9bDFkK+vw/N/2akat40pQa3xYjOeuAz0CyRKzzMP9uSCsLQAIpXR4x3+kX7b2vebvnQ+uLDIllNaUz6/y5F7sW92bPTLmVZeWXpl+iwE0H/QJaz/hoIvfZ6ld3qG6UghkUPCbYB1cGralwViJuQI4uTVBguAnAn/XjM9fxlNDzz8+vZeNNU6B37/Mvz6/gmb917O2T/9YtuUTROBtqkN3Fl9d478DrgjLICBWYkUBcNwBbK45n7+sgOjkrq5s9hy5m29Tf/v8cAOiU9awNmO+YZq0vKDw+UUMIKj5v8FfE5b1ADZze776A42AccCpGvH5HZQAFfms/3AQS3jsXa/7+HvEJ61grZ7YxzSpJxyEzyJiAIKviKfeADeEqQWgk86ZO9Hqr4GAflOTPr/Kf7/xIfbw6NdqxOePSsxiLR7bwWImHQsen1/EAIKdp3H3kdr0/HD0//nqfwEwF0qguLgG9/0p6PfP9u7MOCOVD++MqoH9fh70e/Zg0Pn8IgYQ1Hwe0DYmoyDMhH+UXlr2IqwAk04LAT1UEz6/I09bfovnj+DNPcrKe/23719h0E/EAARfOU+jwxO6vHgm7FZ+wmXAqxDSs445+a45+tXjZexf3Ys9Omae3Mvfj7n+/LXkVaz1qC+ZJi03SH1+EQMIYr4ASuDemPS8cBL+TrTyS8Um/T1YpQ86Tt1xavPtJ/7w1h58dLddYF0FuDo8ZfqNMMPvP15ueImj/x1svOoKCL7W+UKgV9gkAp3b30Xd9rsCeA/CWuoUrTe5dPutBk/np/Z24iW+HQZ+4LyCu0z18YXnyT6DP2Udnj9S/uYG8erjbAlYXD674APMn9YaLANj0ywRYZH0Qys/+6obWQIPgz9kU2vy1fZcJr1/eGXLL3tFX9bt8flup/dyV8DFp/eGbzZgA2s3/hd3QyCDmpcfQIdAoOBrk7fh3owCwkEBdCSzn3A1BPQDddW2KQE7f/IU9adsvydSZ8hC7xj4c8jV95knv3/0AQhTXp01QQWCAsXA+DBRAHrpTE5CBIS/N4T0aE34/KrwU0vvOXPGs1b9FttX7nI+vEtgz3NeqfBLPVZnfH73MQCr4Guft2kN1rFARMib/0refxMc10JYS/3t89scFMLOzGTWg0/wzXIfxa9GDID8/vYT/qyzEWgRAwgqvgjHEbHGMFAANrM+Aj763RDU3LItO71fYwByg4972WjDVHmOXyUdfnyJAUSnrGPtxv1sT6apCz6/iAEENU/TrwZr0/MjQtr0t3EFoGsCYX0Hx3P+9vlV/tTeBLbgrZGs/YAP7Yk6kQ5Re199/ki5qy/v7MOLfEJgG0ogKHBKS/MPQrkc2CHxpwsE9rea3Pc/sO4R1v3xt+2VeXaz3w8xgJbDdrOYSUcdTGqLiAEIvro85QE8GrLFQA7CTzn/LwFnamLfnwJ/f2/rzp6fSlN8l5UT3urFADJZswEbWftnfguJLDQRAwgqPh/HHiHZFtxB+AkxwBeuguuPGADf88/Ws2XvDGexgxe6+P2Z1YwBZLLo5NXU0Zdv+dVFn1/EAIKat4DvEJcegpmANiXyj2MDHJ+BwJbIPfn8u+9fYu7Ivln/MEsaN0fO9Xfn8/saA0jMgum/h5f4uunpJmIAAtXFSWUYbkgrgEhgb7lyXT/FAE7u6samznyet/dynMRT7RhAX9n07/Dc4Trn44sYQJ3hDwFXa0PVBbCZ9fUhpMMAq2uNvj9y/fkY78UDWKdhXnb4qTIGoLb2+pabbKFUiSZiAMHEWw+EZE9AnvIr+/5NgI+54JrKC3L1YgA6dmTb3WzwhFks2u7be97Bp9IYQJJS5Zd63F8+uE1jtBzBzT+I4yG8LsNA54Hk+Ypjf11ZgQRfSzzuyVLck0s0obYNWHxYL7F/upEFEAfBPenYp88fMQC1r//Sdx/nzT0jq/L5vYwBNB/0MWs/4ZD/fG6D9RvwKUBHQI+br8dN1/PzAPNafgSMVr1WgeBrh8exBVA/9BSAsvUHYZ0pb/25adlVjRgABf6+Xv8f1mvsPLuAV+rzexEDiE5ZzdqM/da/PrjRuh98S5p828GYK8VMtkjtDXlSh7STgeUNuZI23SLFGHGenidpMiySNkPwtcXH0NRmQ74UUgqA+/4mXvrbFAKb7Sy81Y8BlOCcin1enj2e3ZmypGwF96ajj7sYQF+5sWfL4XtdGnv6ZRDkV3itHY2AoqwvdVy31lBbvFXwQcBrDGUIoci/3f8fCOSqATt3gu19DEBWInuyEtm9T7xZLvBX3RhAs/4b7Ka/n/fh/wfEqQ+BIEEhSYX7derqfxkE9X0I7XnXXv3ViQGQ8B/b2Y2lTU/jgT+Pff4qYgC80If39jtgb53t533334BuWiPMvXCfBCsohPP+qddfDp/4Ew98V2nbbh9iAOpgj/gh7ysNPj30+T2IAci5/sdqah/+JJDYIdUiZsELCtW8f7XmvyPt/T8F2OyC74cYAJ0f2Urbfi8qq381uvqWy/Vfz9qN/9XeRtvf+/DAWfztMdrpZ4QLICiUFQD3/f8NrHcV3mrFAKA4Cvd24r392/Rb7JdJPmquPx/nxct8c2s0Fx+uxczYdEtj6gArrABBIUc07POsrAA6AQcrmtfnU4+/HB37efMDPN/fJ5+/khhA80Gf8nRfbQ3n+gPL4QZcrUaABQkKMQuAhD+hIY4TPBr15UUMgKr93n5tDF/93fb48yUGwFf/VazNU9/bK+RqOBf/G8oFEBaAoBBWAPpLgc3OPn81YgD4+TNY/WmoZ8r42S7jvKsXA+B7/o/t4pN8A5GLDyVzAsL/aFz6qQihAASFnvDn8BhACwjtP8UuI7p9jQHQsXBvAnv3jVGsdb/Flfb484rnlX4bWDve5CMwff21BstZ/K8p2nRLI63YChQUgqt/BDACKLK5KABfYwBkAfy46UHu+9/RN8t3n79cDCCLtRq532GeXwDq73lVoWU7cLmGuwFCCQgKLQVwObBUHvflwfhuD2IAhdkJ7M1XxyirfzV8fic+Ux7p9dxfEMz8QNfj0zhoXZzxFBRAgXhwBIUGKdl/LSG8X5X3+X2LAdD5rx/fxx4e/RpW7Uy/TPOVW3ytYm3GfO1arBOoevwzwHTgAhEHEBRKqz8hiUp/XX1+n2IAUBQFezqzt18fzVqmLPXLvr+KFkO3sw4T/6nFHn2WbPBNeV2AUAJOpOXVcQVy0YwxtBGKCmAacNbV5/clBkAK4OCW+/L7Pj3vtF98/r6KMsDq3/bpH1V/vLZ68uXBJXisQ6paESZiASq1NxTieuSTAqiHa9MIaBxioO8UOrtAZPorwn8tsLJSn9+7GMD5Q1vve6/D4KXrIvtmnav2vj+d83z/XUyTdjIY+vpvwPEmrgDShALgq79SHts5o5AUQDvwGcAs4MUQAX2XIYoiCDEFYNK1xfHz8sLsZQygTAH8XrC38/13JK4eBAE+Xd19f4ohRPf7SBnnXfs9+oDjeNhTmr/4i6QRiUF2BaCAeuS9DZRCaZ6HhXQeCuE8+PN1lufn1hIl/hM6CoCEv0RWAj0hzEfd+fxexwDkn1t8Nif+qht7rr4Vq/ev/ogB3Dkih8WknQiaPv14SNbgeKOIBUiSRrkGscZ8Mv17Qin+FWpzAHD8E9+tO1OUXWhYAGadVGSKrw+BfU6t/fdDDIACif1/2XyfdOt/FlzYtPfi97Gal/oeA5CTfto/83uw9eW3ACOBBqr5G74KIE9SUqSvBDYpK2aozQBYD6V/PQU4Y0JBAXDzX8aVENpFVfr8HsQAFEXwCf72/x3Z2l26pfvUiKa9F/WCAjjhewwgi7V6Yp9L0k/Q9On/HmgRZ8iT4g0nw9f3N5JQWEgRPqbMywu1OQBk/j+lBDf5963zdNoUrwYAb4Hw7q3Y5/cmD0BPPQRGgm/wFxRAdL+1UmSfJbdDkHf5uu/vdvUPnj79Z6AI5sE8vFLeArOGmfBbHNEB18XsfK1CYw4AXBpqCafTGkIo3iP3/icLgM/9+1Xt+1+dGADwP/ydm0ugWI5svUuKSlopRaesbRyVtCIDQn3O+xgArf45PPIv+2WWIJzdZzmGB2O41pDfkDeMTA+RFcKjoB8JRL6kxEIWgT8bkrMADfhuBssVoaUAIPxncuIjIMQPQ3CPV+TzexEDOAe8gr/bmP42UfNBn0h39PpAikpZ2wNK4A9v9/1hQfAmnxq3JloQzeozWL4E9Lq0XHtALFyi/rgOF+E4ESgI0fl/FOsZxpOb0vND5wZC8IGEBhDa0WXtv3yMAciK4AhwX7E5jgcXidqM+xlK4FOpxdCd10Ynr8ryePaf6vuPyOFTfdVinOCe3WddD+GPDAcFoFH84LiMAvKJ+wGHQ3YWoMG6A5bnrSG33Svv/+svwPFlCHBpdWMAvI+AWX+jHFeQFUCLx3ZKd47IkW7saoA7sGIghPukp/v+crnv725X3CCd3VcEvI/z6+R4QGgmCKl98TsYrRG4J3HKfLzzIToLsBjHMfjODUMuviNbAPpLgQ2V+fyexAAAGh3+bEkOtyjsCoCIFEBk32VS096Lb8RxMwT8vKf7/rLvr662wRoDcOQtRXiAZkH4uRLQGEMnHsBN/sHKcIxUng6r11J5NE+UCTGf385bv8H3vTXWGIIBXmUH4AqqAKzM5/csBqD/CXxndaqQK9360NvSbQ+/U79pnyVD4OOfqmrfP7rfOtZu3M8uHXmCOAbgzJPPmE4ZcbEhVDyiNTL+PeLSSsm6iaXeCCG636+CVv8pSv5/6JlyShvwa4EjHvn8lcQAoACW4HglKYDTe+PL/a/bH10gNe3DrYCrYervVf39imIAco//4+UacgR3DMCJz4fSmg1cHxMCSkAdiaVf8DtF/mlA5p7yCjC0YgC0+uO1Dho++y8E3bkSuQVYJIQ4t3Kfv8oYwCngKbWq0J0FQERuQGTfpQ2wwo8A8iuu91/N2o79X6VdfoM0BuDqHlhxPh/HW2INZXPl6p7gn1TKfLkf3AUKYC/uxbkQ9flVniybl4FLSHE/8BoLPQXw+0ruBugAq1MOgJcxAJ5DIP8drgAqosjkFVJUYpYUmbTidhy3VVjvP2Qri5n4jyJIFrv/XzdiAOViAtRAZDnQEcLTgAfQeNZc8G8n3T7yoKIAciU50ck6goakhuQ+vwPPE38MPPGnU0jXeSgC+yhQWL0YgP5jZZhIpf8vMilLikpeJUX3X18/KmnFWKoSLFfvn7SCtR79lXITrHU1BuDKl+Iho/HivfE9LlZTSeOC9OGiCH9MWj5P8unz/nn6jLcopbDHQtjfd8QZ3K+XtOnWC0NaAUBwI2xKE1BfYwBQBBT9nwI0rEoBEDUbtJlnB0alrImMSsra7poXQNN9Oyirv9ZNU846FANwlydwVDErIzUZ1vryWOm8oPEv5ay+ArmqL51n+VGCT1eAgn3FIbvPX37f/3OgDVk/bY3HQ9kC0EUA8hAQX2MAZl0Bzu8uNifg73Wu8n82TcyUmg3YKN35+Gf1oAiGO+YFUOLPnQ6JP5WtsHUhBlABbyOBwsM2kKYMKWm09nz62s7qU0BFPe3weabh+INzpD9kfX6Vt8FtG6fW/If0JGilDXgqUOJrHgDwPXCd475/lVbAgE1kAZA7cB3M/yVqjQCl/coNP1x9/rocA3DP43gM+BDnD8oltJYIbhEo+82tZvwTSIGXtOkWVfBvBybh83yGz3NGzoMPbZ9fWzZVihTdXvA3hkU6t6IAjKQAfIwBUP+ApXAjLrJ5YP47UlRyJlyBTCkyMVMHHCHzv8WQ7Sxm0lG3Pn8djwG4542WUmqcAYH/EN/tXjyEl8cYLA3Uh09VBuSP+6PXQPzkQnudgkYpaolN5xYIdTi+GRiukc3902Hi67siF/dgKCzQ+mHR57HYBAVg0k/mFoAvMQCz/gzwvM1D/99ZAayUIPRSZJ/FjSP7LJ0C87+o9egDTn5z6MUAKuRLwdPDtxlCPxpC2BavNWn2ws8O3XUtPrkJ/HfTrM5deg35UCq5DZQKvvvwN18jUx8PfVFY+PgV7/tn4hpcR8Ifmx4OCkC2AKZBmM/4EgMAcoE+p826CG8tAKI7Hn2fxwNwbNZ84Obt3nT8qcMxgEp4borS6vst8I5SgdZZXp0tjTRqLoFiGZRV4ynWgtGi7tdLGvXnlJ+JMxRS6u61QCu8/xDwHM43A0eAc2Hk41fAW34E3yMmzWJXuOGiAKbzldy3GMAvOMaUUE2BFzEARwVA24KX3ayr12bs/1JiUo8fcRCEkI4BeMifAn7G+cfKKj0egpuI83gcmyor+PUQ9mtwXa7C61dDAVDLqls0/H1La7yfwDvZGiwz8fpKDfftLUeobj/UfXoPc/3pWIDrNVEd9hI2/R0VBZDuewxAtwv8zTz7LzvB58/RfsKfkjb9FHWSfU/uJBsmMYCqYwSO/HnFRD8B/K5U4O3Gg/wJXl+H4wrwq/Fwf4pzM86/Bn4CDiq1CefC1K+vCud5rz8514HHRMKGlG3A0RBgm9cxADkHYD7OL5PTf/U+fYY2Y76R2k/8S9Km8nRTDQT9v2EYA/Cad1EY5xUFcT6cfXgffH7CH7iuOlw7Km0OryEv8kwAXQpwysc8gMlF5o4NfDH/nTLPyrajGinNJY6HZwzAM975QQ5Xn90vfAF4A9BYG46zHYqzeSrwPUCB1zEAeQvwaev2GN5b0F/70ni4LwZmyZ1lwz4G4JbXhLXP7jeeLKaVwM1qwDTsqPS/XUkBaKkYyPsYAFUA6oYWm2OkYrPeL59HjWjjeCtu1rpyD3+4xQCqnksg4DsoRtK17fNHwyfq7yYISLhNbgjqbR6A3gKknDV3kqrrArhaATGpvPpMjwf+CxEDqCwGIHx633jaBbH2B+qF9VQnRQFQE4+vfIgBUA5AcvE+vV8tAG26Uz76Y0oBjYgBiBiAv/giXEsD0ERTlgkZpgpADgJejONSr/sBmPU0/ivJnwrATZ765cAMuYBGxABEDKC6uf6WEmApFOi/QqlXYzV2AbjwNsLRCKE+60UMoNRm1h+G8uhVbI71uwJwUQI0gvsTjZwuK2IAwnevDvZQlWOs0qw17IlPBjIl1MPqngJYPMj9p8h/sWL+0yCRoXJfwZpTAPGGExQPaKc1WLdpHfa5RQxA+PRe8t/hGerRbvJxLvwdhAJQXIB93A2Ix/mvlcYAzDQ3QE+1//lKERBZDGNs39WMAiCKy5Cr1jpMyq2nNKb4TMQARAzAWx4Lxx84H6h296WqSK1QAFAAOQlqZ2Cq519byWzAs1zwTVwBlCpzAOh1Q3GOvn5NKQCeJGRQilwyoAQM1gfx8H8tYgDCp/ewvl/twjRM7m5kEYLvZheA0EDuDMRn+7n6/GflgJ+uSHEBHGsB3oVSaFJsqrgTsH/cAXulGzS4pZeyjSNiAAKVw2A5CaTKfRjpGcoTQl8uEMgVQEeyArop3X3tPj+EvBiCnSsrgfIxAby/F+e3yrMAdDX6OdVRW7HpXAkMxvmfIgYgfPxKeCuul5H6KqgTfcXq74ZOm+VSXuAGCPV6B0G3wQ2w8l4BFfYD4ANF7jmVrZOKzTWsAMqyBAmX4qaOA46JGIDw8cvxRguVUc+Vx7Plhc205mq4AjqpJCcugg/3kP18G/n8WP3PVNoPgLYOTbr5wEVyToG+Rj+nxuCkBC7XGqyTcJOPihiA4FVeI48onw3+RjL7Y5Vx7YIqVQAdlYk++mi4BDso2g+L4KwncwGAQ0DL4mz8jZ/uCYgloH3OnjFIPQSeUmrkRQxAwIprNBe4JtaYK+knHwm9gZ41FQy0yWgAC2CgvN3n8WxAchFovDgPBlJ78Jom3vIqzSrJgzfzLwA/BNr+ZxEDCGv+JK5PmrIoSCLTz0sqMqtbgrzF9ycQ6POezwbUHYbyGFjCdxP0PL+gpknjcJOBC3Hzk5ReeiIGEH48uYETcX4lRfrVrseCfNkWzOlEsYCHgIMV5QW4zgZUxoN9Cb5b8Z64CKXGIDDuQMYJWQkYChpSj32c5zi1FRMxgFDmz1NbdeBJoIm61ScCfr4qgD16VXAvhUDPUIKBHswG5KAcgR34vS5FZl1DygsglPBkI73/FZUDzuTESxtXGaSp72Y1euiFn7t3nXLku7j0vJDvHyB6+Vm/xzUZivt8IXVF1hjFql89wZJrA+QUYZP+RgjXkrLkoApjAI58KY6HoAyehPD/68y+Tsrf0vnFLSjeFy8rKJN961Ky5egbQOn8C6+1LzF37G8zJ8z7YvOw35954+Pz+ozjWCXyRQwg9PgzuBZblI7H9R0nHAnyy+qqk4qy+Qquwfm2qmMATrMCCSfAfwj0xPs3Fe/rJAcZla1C2cpoUT4pCe+fNsVLamahfZVXBF5WUPH1cLwG/J18srGJjzZbg//zg5K3QJWK7JetfdmcBQvZvdP+EDGAEODLFKDlFPh3gdax6fm8oUdMWp7w+f2eF2DiqAfhioOfvwuCdrayGEA5Xv7Zf4ANlF8AodTj9VuVBiQN5ZbkHSNK+JH+VyfahqT4QwSO9YELcH45cD3+dwsI/L04Ugfj2fhbWTjm4PeO4rXz/H+qnYoVwBpgx3fdW5q1fHru3VMP8eEXIgZQ53P7DwOT8boyvSdfrPo15w7IZnvhp21pNY6HsG1V3YEKYgDuefn8FAT0DwhqjiK8L+DvPQ3QaPLBOCZCkHvh/QHgx9loWIlJ/zqwGPwnwLc2nnWoP4W/f16pQ7ALuxueEpiOlph1mda9dyX+Z8ZP9+OB2QSUiBhAnUQpL+elASdG66UaYfIHhnK3tuOm+wnL02SKRwFvA3mVxADK8bZyvL5ULifWUapxEY6nSbBxXgic5q/Lk4rOyjEFfQV/T171bc59CimB6QB+biYQB/4S9qdU763lcymD8CY8OC9oDXKLMREDqAs8/775WpqibLB20Bgt9WnVVwebCgpAPOCUkiQkBwf110HAnqIVmawBtzGAmuZVgS97nRTG13iPApZPAq3wOS84xMYrhU56qduUv5T5eTSG2zqYpupolK1CEQMIUp+fovwGyzd47RngX9o0C802lDqk5gp/v3bcAa4A4KsnkP+uhyDOA/5wVQQVxgT8x5/H57Di/AfapaAdBxxj8VmudAwaFn+ud5s4FGvIq4eVRI+HaT7wT13sMRjqMQB8P6z6lix8ZxqM2lCeaCxXgwqqTUXwhSxgJXLWYBNlqMibEMKDWG15v4AqYwIe8/ZV/yz4Ipvchmw/FMCrEPB+OG+P9646l9MlomxnofLko9iMPN5XIE6uI7gKD1oKkI3zYhEDCArQ/MJDwATcp5u0xlOS2OILsjyB0/vi5S05jgQSvguBSPCj8H4WbzFu1p8opkpCk95NDMDBhHeNEZA1QWPKzHoK+H0DbAReh6A/gaOGdhBwfkFRjq6emmhkX/F3VJ1sxGe/TbYoo7SpnsBSHw/a/+E8nZJKcF4qYgC1xv+N7/cOoNEa8xvFpudJIrMviLcJ1QrCYqWfAF6jrTsyw5tDIJNwboCAvgl+JbAT73/B9+pppLhZ/30xBevMOjPOtxTznQHdWzhOBUbh9+6nrT9el2CCgjHpI06p/4sE3yEL0BeiYqJYgxxMUgJKVEvQFVhkrywUMYCa5cuGdBTgnKYb94VivrJ76lF77weNqOSrSwpBp7YZVxJ2+Hlj4FqgKd5rDUXREeddKLcAaAs0w89RbsDVODYucRDyYvvf0im9C2u09biy2lj/pTSP3EnRZxEDqDEfn5p20KwHE77XGOBGzRTZMrtLaf8mqA6TTd05cIC8cuvK5fEXmxyz/WQEmhwVQYdUPi4qEg/hkzjSA3pKxAD8CsrF+FnDB75Y7tQY8hqIIF8YxA7sgq6s6mouf7CQ6g6Q2ckzzOQH899kEeD1LUCuiAF4x2ud+dO8rbvBQvGWSI0xv3Fchryl1yHVIrb2BAWDEiC/M6+sFblsFdTDanUzHlzKH4Cvaj0uYgCe+/jUnw/Xbgc+83P4Dq3wWuPYdKWPA2/ski+q+AQFJzm6BlRwguP/4cGmxiO0R32QzNnayCMI7hgAV1BncV3+wWsbwI/CNYvSpOfVV1N4E0S3HkF1VRFoH+fHa5VJRVOB/Uq66tkwjwGcV8z8X4BXoAAehAK4IdaYX5+3cBP1+oLqtBKgbsQGB0XwMj82Bq6mTkTAG3jgDyjKICxiAGVBPctvOK5Q0qxvAS6IMZ6OcHCjxF6+oBBTBI7KwGiNwOp2iVb2cYcDNIL6G1UZhFwMwGgpVKrzVuI9o9KY42p8xnpapUSXp10LwRcUDu5BnLHAnl2o5BRcBcTifBAEZCaOnwK/AgUax2zDOhIDwP8j9+Y4znNkS8c6FN8jnlyh1hOO2r+36MQrSMQKjPl8ByEWFkL8xEJJk55/gRI8jCPBwXuvQXg+pzbWEKoiub2V0sS09mMA55XPQ758HvADsAYKwYD//TAsj6b4/Jc2n83wvSwuiVRC8AUJKmcR2JtXkMuQlk/96y6AMFFZcjt5aq2VLITFwDYI1zdKMUwehK2kfAyg3PDLyvbdy/POMYRzeJ9MeRqvRuOzvwBW47WXlGzI9sA1wCWxBkujjlPh0ztsj4pUXUGCPI0ZpDkoAaVnPU02ik3Pj1DKXZsA1wPNld2FQTTVVjG3acvxE/wupSebSVChXGj+wU/A7/hbhzWyEJ+kOgbaftPwwanW33nGncFCnXO/1lASjtHyKd7PhODS352CvzkSr/cCOuI8kldIyp8nwml1N1iEiS9IUM24DO7BlYTB2kgjr8I3A03xWnNqholzDfU0wHvdcf4ACTGOSXitL46PAPdDaLuD74Rz8tU74PdaQvBvofhEbLpaY18m1HblBHQWJr0gQUGgGAwOLoSiFDQOo67tk5EylDoGvtdellfvuA1X9ntia06QoDpvMTgpAoPVrXDLfrrFXv4sSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYIECRIkSJAgQYLs9P8uOIxD+s/oiwAAAABJRU5ErkJggg==',
      addUrlForm: {
        nid: '',
        item_title: '',
        item_url: '',
        item_ico: ''
      },
      loadingMore: false,
      showLoadingMore: true,
      data: [],
      addForm: {
        nid: '',
        title: '',
        leve: 0
      },
      visible: false,
      visible2: false,
      treeData,
      expandedKeys: ['0'],
      txt: '',
      urlList: []
    };
  },
  created() {
    this.init()
  },
  mounted() {

    this.getData(res => {
      this.loading = false;
      this.data = res.results;
    });
  },
  methods: {
    onCopy(txt){
      this.$copyText(txt).then(
          e=>{
            console.log('已复制至剪切板：', e);
            this.$message.success("已复制至剪切板")
          },
          e=>{
            console.log('复制失败：', e);
            this.$message.error("复制失败")
          }
      )
    },
    delUrlItem(item) {
      const params = {
        action: 'delUrlItem',
        info: {
          item_id: item
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        if (res.result) {
          this.$message.success("删除完成")
          this.getUrlList(this.txt)
          return;
        }
        this.$message.error("删除失败")
      })
    },
    createWindow(item) {
      let param = {
        type: 'web',
        content: item
      }
      this.$ipcInvoke(ipcApiRoute.createWindow, param).then(r => {
        console.log(r);
      })
    },
    urlChange(e) {

      var s = this.addUrlForm.item_url;
      var a = s.indexOf("http"); //7
      if (a === -1) {
        this.$message.error("网址需要带http或https")
        return
      }
      var b = s.indexOf("/", 0); //22
      var c = s.substring(0, b); //'c.biancheng.net'

      const url = new URL(s);
      url.hostname; // => 'example.com'
      var ImgObj = new Image();

      ImgObj.src = c + "//" + url.hostname + "/favicon.ico";
      if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        this.src = ImgObj.src
      }

    },
    IsExstsFile(yourFileURL) {
      var flag;
      var xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();//其他浏览器
      } else if (window.ActiveXObject) {
        if (!xmlhttp) {
          window.alert("不能创建XMLHttpRequest对象");
          flag = false;
        }
      }
      xmlhttp.open("GET", yourFileURL, false);
      xmlhttp.send();
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200)
          flag = true;
        else
          flag = false;
      }
      return flag;
    },
    showVs2() {
      if (!this.txt) {
        this.$message.error("请选择一个组")
        return
      }
      this.addUrlForm = {
        nid: '',
        item_title: '',
        item_url: '',
        item_ico: ''
      }
      this.addUrlForm.nid = this.txt
      this.visible2 = true
    },
    getData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },
    onLoadMore() {
      this.loadingMore = true;
      this.getData(res => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    },
    selectTree(selectedKeys, info) {
      this.txt = info.selectedNodes[0].data.props.dataRef.nid
      this.getUrlList(this.txt)
    },
    getUrlList(nid) {
      const params = {
        action: 'getUrlItem',
        info: {
          nid: nid
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        if (res.result.length > 0) {
          this.urlList = res.result
          return;
        }
        this.urlList = []
      })
    },
    confirm() {
      const self = this;
      self.message.info('Clicked on Yes.');
    },
    init() {
      const self = this;
      const params = {
        action: 'get',
        info: {
          nid: '0'
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        if (res.result.length == 0) {
          self.$message.error(`没有数据`);
          return;
        }
        const ress = res.result;
        for (let i = 0; i < ress.length; i++) {//第一层
          const params = {
            action: 'getTreeOfPid',
            info: {
              pid: ress[i].nid
            }
          }
          this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res2 => {
            console.log('res2:', res2);
            const lv2 = res2.result;
            if (lv2.length > 0) {
              for (let j = 0; j < lv2.length; j++) {
                const params = {
                  action: 'getTreeOfPid',
                  info: {
                    pid: lv2[j].nid
                  }
                }
                this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res3 => {
                  console.log('res3:', res3);
                  if (res3.result) {
                    lv2[j].children = res3.result
                  } else {
                    lv2[j].children = []
                  }
                })
              }
            }
            ress[i].children = lv2
            this.treeData = ress
            console.log(this.treeData)
          })
        }
        self.$message.success(`加载完成`);
      })
    },
    getTrr(tree) {
      for (let i = 0; i < tree.length; i++) {
        const params = {
          action: 'getTreeOfPid',
          info: {
            pid: tree[i].nid
          }
        }
        this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
          console.log('res:', res);
          if (res.result) {
            tree[i].children = this.getTrr(res.result)
          } else {
            tree[i].children = []
          }
        })

      }
      return tree
    },
    getGroup(pid) {
      const self = this;
      const params = {
        action: 'getTreeOfPid',
        info: {
          pid: pid
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        return res.result;
      })
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      let addForm = this.addForm;
      if (!addForm.nid) {
        self.$message.error(`没有需要添加的数据`);
        return;
      }
      const self = this;
      const params = {
        action: 'addGroup',
        info: {
          ...addForm,
          memo: '-'
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        if (res.result) {
          self.$message.success(`添加完成`);
          this.visible = false;
          this.init()
          return;
        }
        self.$message.error(`添加失败`);
      })

    },
    handleOkItem(e) {
      console.log(e);
      let addUrlForm = this.addUrlForm;
      if (!addUrlForm.nid) {
        self.$message.error(`请先选择组`);
        return;
      }
      const self = this;
      const params = {
        action: 'addUrlitem',
        info: {
          ...addUrlForm,
          item_ico: this.src
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        if (res.result) {
          self.$message.success(`添加完成`);
          this.visible2 = false;
          this.getUrlList(this.txt)
          return;
        }
        self.$message.error(`添加失败`);
      })

    },
    onContextMenuClick(treeKey, menuKey, leve) {

      console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
      if (menuKey === '1') {
        this.addForm = {nid: '', title: ''}
        this.addForm.nid = this.$baseUtil.uuid()
        this.addForm.pid = treeKey
        this.addForm.leve = leve + 1
        this.showModal()
      }
      if (menuKey === '3') {
        this.deleGroup(treeKey)
      }
    },
    deleGroup(nid) {
      const self = this;
      const params = {
        action: 'delGroup',
        info: {
          nid: nid
        }
      }
      this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
        console.log('res:', res);
        if (res.result) {
          self.$message.success(`删除完成`);
          this.init()
          return;
        }
        self.$message.error(`删除失败`);
      })
    },
    // 获取当前节点id以及下面所有子孙节点的id
    getNodeAndChildrenIds(data) {
      let temp = [];
      const loop = (data) => {
        data.map(item => {
          temp.push(item.id)
          if (item.children && item.children.length) {
            loop(item.children);
          }
        })
      }
      loop(data);
      return temp;
    },
// 更新树组件的数据

    updateTreeData(id) {
      // eslint-disable-next-line no-undef
      const temp = _.cloneDeep(this.treeData);
      let node;
      const loopFn = (data, id) => {
        if (node) {
          return;
        }
        data.some((item) => {
          if (item.id === id) {
            // eslint-disable-next-line no-undef
            node = _.cloneDeep(item.children);
            item.children = [];
            return true;
          }
          if (item.children && item.children.length) {
            loopFn(item.children, id);
          }
        });
      };
      // 获取A节点的子节点,并把A节点的children移除
      loopFn(temp, id);
      // eslint-disable-next-line no-undef
      this.treeData = _.cloneDeep(temp);
      // 获取A节点下面所有子孙节点的id
      const nodeIds = this.getNodeAndChildrenIds(node);
      // loadedKeys中移除A节点的key
      // eslint-disable-next-line no-undef
      let loadedKeys = _.cloneDeep(this.loadedKeys.filter(item => item !== id));
      // 去掉A下面已加载的子孙节点的key
      // eslint-disable-next-line no-undef
      loadedKeys = _.cloneDeep(loadedKeys.filter(item => !nodeIds.includes(item)));
      // eslint-disable-next-line no-undef
      this.loadedKeys = _.cloneDeep(loadedKeys);
      // 去掉A下面已展开的子孙节点id
      // eslint-disable-next-line no-undef
      this.expandedKeys = _.cloneDeep(this.expandedKeys.filter(item =>
          !nodeIds.includes(item)));
    },
    onLoadData(treeNode) {

      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          const params = {
            action: 'getTreeOfPid',
            info: {
              pid: treeNode.dataRef.nid
            }
          }
          this.$ipcInvoke(ipcApiRoute.favoriteUrlOperation, params).then(res => {
            console.log('res:', res);
            treeNode.dataRef.children = res.result;
            this.treeData = [...this.treeData];
            resolve();
          })
          // const  tree =  this.getGroup(treeNode.dataRef.nid)
          //  this.treeData = tree
          //  treeNode.dataRef.children = []
          //  for (let i = 0; i < tree.length ;i++) {
          //    treeNode.dataRef.children.push(tree[i])
          //  }
          // treeNode.dataRef.children = this.getGroup(treeNode.dataRef.nid)
          // treeNode.dataRef.children = [
          //   {title: 'Child Node', key: `${treeNode.eventKey}-0`},
          //   {title: 'Child Node', key: `${treeNode.eventKey}-1`},
          // ];

        }, 1000);
      });
    },
  },
};
</script>

<style>
.divmain {
  background-image: linear-gradient(174.2deg, rgba(255, 244, 228, 1) 7.1%, rgba(240, 246, 238, 1) 67.4%);
  height: 100%;
  text-align: left;
  scrollbar-width: none;
}

.floatRight {
  width: 55%;
  border: 2px solid #efeeee;
  height: 90%;
  top: 2rem;
  position: absolute;
  z-index: 9;
  left: 33rem;
  border-radius: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

.floatBut {
  position: absolute;
  z-index: 2147483647;
  right: 1rem;
  bottom: 2rem;
}
</style>
