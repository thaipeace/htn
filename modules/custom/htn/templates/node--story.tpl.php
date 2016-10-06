<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="<?php print $classes; ?> clearfix node-<?php print $node->nid; ?>"<?php print $attributes; ?>>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || $preview || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <mark class="watermark"><?php print t('Unpublished'); ?></mark>
      <?php elseif ($preview): ?>
        <mark class="watermark"><?php print t('Preview'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>
  
  <div class="thanks">
    <div class="intro">
      <div class="title">Cảm ơn <?php print($field_name['und'][0]['value']) ?>,<br/>đã gửi câu chuyện hài hước<br/>của mình về cho ban tổ chức</div>
      <div class="desc">Nội dung sẽ được duyệt trong 12h, sau đó câu chuyện sẽ được đăng lên Thư viện ảnh cuộc thi trên website của chương trình.</div>
      <div class="foot">Trà thảo mộc Dr Thanh, <br/>thanh lọc bên trong, tươi trẻ bên ngoài</div>
    </div>
  </div>
  
  <div class="fconnect">
    <?php if (!user_is_logged_in()) {?>
      <a href="user/simple-fb-connect?url=node/<?php print($nid) ?>">Đăng nhập bằng Facebook</a>
    <?php }else { ?>
      <div id="fb-share-button">Chia sẻ</div>
    <?php } ?>
  </div>
  <div class="backhome">Trang chủ</div>
  
  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>

</article>
