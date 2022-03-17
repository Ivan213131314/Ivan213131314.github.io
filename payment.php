

<?php
    require __DIR__ . '/lib/autoload.php'; 
    use YooKassa\Client;

    

    $client = new Client();
    $client->setAuth('840278', 'live_TOcIxSm9xLF5ytQ-4gGBrBUSR_l1qU3ODpKIHszvAVs');
    
    /////
	$uid = uniqid();
    /////
	

    $payment = $client->createPayment(
        array(
            'amount' => array(
                'value' => 169.0,
                'currency' => 'RUB',
            ),
            'confirmation' => array(
                'type' => 'redirect',
                'return_url' => 'https://iq-tester.mcdir.me/myresult.php?uid='.$uid,
            ),
            'capture' => true,
            'description' => 'Узнайте результат IQ теста и получите сертификат о прохождении на почту',
            'metadata' => array(
				'uid' => $uid
            )
        ),
        uniqid('', true)
    );

   

    header('Location: ' . $payment["confirmation"]["confirmation_url"]);
    ?>
    <p>Сейчас вы будете перенаправлены на страницу оплаты, если этого не произошло нажмите на ссылку ниже:</p>
    <p><a href="<?=$payment["confirmation"]["confirmation_url"];?>">Оплатить</a></p>
