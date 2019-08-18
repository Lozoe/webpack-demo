export default {
    name: 'Header',
    props: {
        title: {
            type: String
        },
        lefttext: {
            type: String,
            default: '&#xe604;'
        },
        righttext: {
            type: [String, Object],
            default: '右侧按钮'
        },
        headerextendcls: String,
        goback: {
            type: Boolean,
            default: true
        },
        showback: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        regret() {
            if (this.goback) {
                this.$router.back();
                return;
            }
            this.$emit('regret', this);
        },
        affirm() {
            this.$emit('affirm', this);
        }
    }
};
