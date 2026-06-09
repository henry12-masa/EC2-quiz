window.quizData = window.quizData || {};

window.quizData.vpc = [

{
q:'VPCの主な役割は？',
c:['AWS上の仮想ネットワーク', 'オブジェクト保存', 'ユーザー認証', 'DNS登録'],
a:'AWS上の仮想ネットワーク',
e:'サブネットやルートを設計します。'
},

{
q:'サブネットとは？',
c:['VPC内のIP範囲', 'IAMユーザー', 'S3バケット', 'EC2 AMI'],
a:'VPC内のIP範囲',
e:'AZ単位で作成します。'
},

{
q:'パブリックサブネットの条件は？',
c:['インターネットゲートウェイへのルートがある', 'NATだけある', 'S3だけ接続', 'IAMがある'],
a:'インターネットゲートウェイへのルートがある',
e:'外部公開リソースを配置できます。'
},

{
q:'プライベートサブネットの特徴は？',
c:['直接インターネットから到達させない', '必ず公開される', 'DNS専用', 'S3専用'],
a:'直接インターネットから到達させない',
e:'DBなどの配置に向きます。'
},

{
q:'Internet Gatewayの用途は？',
c:['VPCとインターネットを接続', 'IAM認証', 'S3暗号化', 'EC2バックアップ'],
a:'VPCとインターネットを接続',
e:'パブリック通信に必要です。'
},

{
q:'NAT Gatewayの用途は？',
c:['プライベートサブネットから外向き通信', '外部からSSH許可', 'DNS権限管理', 'S3削除'],
a:'プライベートサブネットから外向き通信',
e:'戻り通信のみ許可されます。'
},

{
q:'ルートテーブルの役割は？',
c:['通信経路を決める', 'ユーザーを作る', 'S3保存', 'AMI作成'],
a:'通信経路を決める',
e:'サブネットに関連付けます。'
},

{
q:'セキュリティグループの特徴は？',
c:['ステートフル', 'ステートレス', 'DNS専用', 'S3専用'],
a:'ステートフル',
e:'戻り通信は自動で許可されます。'
},

{
q:'ネットワークACLの特徴は？',
c:['ステートレス', '必ずAllowのみ', 'EC2専用', 'IAM専用'],
a:'ステートレス',
e:'インバウンドとアウトバウンドを個別に設定します。'
},

{
q:'VPCピアリングの用途は？',
c:['VPC同士を接続', 'S3暗号化', 'IAM作成', 'DNS購入'],
a:'VPC同士を接続',
e:'推移的ルーティングはできません。'
},

{
q:'Transit Gatewayの用途は？',
c:['複数VPCやオンプレ接続の集約', 'S3保存', 'IAM認証', 'EC2停止'],
a:'複数VPCやオンプレ接続の集約',
e:'ハブとして接続を集約できます。'
},

{
q:'VPCエンドポイントの目的は？',
c:['AWSサービスへプライベート接続', 'EC2台数削減', 'DNS購入', 'IAM削除'],
a:'AWSサービスへプライベート接続',
e:'インターネットを経由せず接続できます。'
},

{
q:'VPC応用1：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用1：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用1：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用1：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用1：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用1：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用2：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用2：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用2：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用2：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用2：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用2：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用3：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用3：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用3：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用3：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用3：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用3：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用4：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用4：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用4：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用4：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用4：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用4：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用5：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用5：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用5：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用5：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用5：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用5：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用6：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用6：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用6：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用6：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用6：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用6：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用7：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用7：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用7：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用7：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用7：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用7：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用8：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用8：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用8：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用8：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用8：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用8：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用9：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用9：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用9：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用9：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用9：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用9：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用10：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用10：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用10：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用10：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用10：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用10：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用11：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用11：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用11：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用11：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用11：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用11：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用12：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用12：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用12：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用12：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用12：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用12：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用13：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用13：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用13：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用13：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用13：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用13：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用14：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用14：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用14：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用14：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

{
q:'VPC応用14：Bastion Hostの用途は？',
c:['プライベートサーバーへの踏み台', 'S3複製', 'DNS委任', 'IAM課金'],
a:'プライベートサーバーへの踏み台',
e:'管理用接続を集約できます。'
},

{
q:'VPC応用14：Direct Connectの用途は？',
c:['オンプレとAWSの専用線接続', 'S3暗号化', 'IAMログイン', 'Route 53購入'],
a:'オンプレとAWSの専用線接続',
e:'安定した専用接続を提供します。'
},

{
q:'VPC応用15：Gateway Endpointで代表的に使うサービスは？',
c:['S3', 'EC2', 'Route 53 Resolverのみ', 'IAM'],
a:'S3',
e:'S3やDynamoDBに対応します。'
},

{
q:'VPC応用15：Interface Endpointが利用する技術は？',
c:['AWS PrivateLink', 'CloudFront', 'AMI', 'MFA'],
a:'AWS PrivateLink',
e:'ENI経由でサービスに接続します。'
},

{
q:'VPC応用15：CIDRの用途は？',
c:['IPアドレス範囲の表現', 'IAMパスワード', 'S3暗号化', 'DNS名前解決'],
a:'IPアドレス範囲の表現',
e:'例：10.0.0.0/16です。'
},

{
q:'VPC応用15：VPC Flow Logsの用途は？',
c:['ネットワーク通信ログ取得', 'EC2 AMI作成', 'S3静的配信', 'IAM権限付与'],
a:'ネットワーク通信ログ取得',
e:'許可/拒否された通信の分析に使えます。'
},

];
