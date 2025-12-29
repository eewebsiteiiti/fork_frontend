#!/bin/bash

# Image Migration Script
# This script reorganizes images into a clean folder structure

cd /home/ayush/fork_frontend/ee-nextjs/public/images

echo "=== Starting Image Migration ==="

# Create directory structure
mkdir -p people/faculty people/staff people/students/btech people/students/mtech people/students/phd people/students/ms people/alumni
mkdir -p gallery/department gallery/events gallery/trips gallery/batches
mkdir -p labs/ug labs/pg labs/research
mkdir -p activities/eesa
mkdir -p banners logos

# ============ PEOPLE IMAGES ============

echo "Moving student images..."

# BTech students (9 digit roll numbers starting with 19, 20, 21, 22, 23, 24 - format: YYPPPPNNN where PPPP contains 0002)
for f in people/[0-9][0-9]0002*.jpg people/[0-9][0-9]0002*.JPG people/[0-9][0-9]0002*.jpeg people/[0-9][0-9]0002*.png; do
  if [ -f "$f" ]; then
    filename=$(basename "$f")
    mv "$f" "people/students/btech/$filename" 2>/dev/null
  fi
done

# MTech students (10 digit roll numbers containing 02102 or similar)
for f in people/[0-9][0-9]02102*.jpg people/[0-9][0-9]02102*.JPG people/[0-9][0-9]02102*.jpeg people/[0-9][0-9]02102*.png; do
  if [ -f "$f" ]; then
    filename=$(basename "$f")
    mv "$f" "people/students/mtech/$filename" 2>/dev/null
  fi
done

# PhD students (10 digit roll numbers containing 01102 or 01202)
for f in people/[0-9][0-9]01102*.jpg people/[0-9][0-9]01102*.JPG people/[0-9][0-9]01202*.jpg people/[0-9][0-9]01202*.JPG; do
  if [ -f "$f" ]; then
    filename=$(basename "$f")
    mv "$f" "people/students/phd/$filename" 2>/dev/null
  fi
done

# MS students (roll numbers containing 01802)
for f in people/[0-9][0-9]01802*.jpg people/[0-9][0-9]01802*.JPG; do
  if [ -f "$f" ]; then
    filename=$(basename "$f")
    mv "$f" "people/students/ms/$filename" 2>/dev/null
  fi
done

echo "Moving faculty images..."

# Faculty images (named files)
faculty_images=(
  "vivek.JPG" "vivek.png" "Amod.JPG" "pachori.JPG" "santosh.jpg" "SM.png"
  "vipul.JPG" "kranti.JPG" "DOSA.JPG" "prabhat_ZDTOMHj.JPG" "Trapti.JPG"
  "vimal.JPG" "mukesh_ZZCh8I7.JPG" "Saptrishi.JPG" "Swami.JPG" "Sumit.JPG"
  "Vijay.JPG" "Apinna.JPG" "pic.JPG" "sharad.JPG" "Srivathsan.JPG"
  "lokesh.JPG" "prathap.JPG" "paladhi.JPG" "chopra.JPG" "Dibbendu_Img.png"
)

for img in "${faculty_images[@]}"; do
  if [ -f "people/$img" ]; then
    mv "people/$img" "people/faculty/" 2>/dev/null
  fi
done

# Staff images
staff_images=(
  "arjun.jpg" "Arvind.jpg" "DMS.jpg" "rakesh.jpg" "shailesh.png"
)

for img in "${staff_images[@]}"; do
  if [ -f "people/$img" ]; then
    mv "people/$img" "people/staff/" 2>/dev/null
  fi
done

# ============ GALLERY IMAGES ============

echo "Organizing gallery images..."

# Department images
mv gallery/FC1.JPG gallery/FC2.JPG gallery/DUGC.JPG gallery/vdn.JPG gallery/ps.JPG gallery/staffCombo.JPG gallery/csp.JPG gallery/makerspace.jpg gallery/department/ 2>/dev/null
mv gallery/9K6A*.JPG gallery/department/ 2>/dev/null
mv gallery/IMG_*.JPG gallery/department/ 2>/dev/null

# Batch photos
mv gallery/btech*.jpg gallery/batches/ 2>/dev/null
mv gallery/mtech*.jpg gallery/batches/ 2>/dev/null
mv gallery/phd*.JPG gallery/batches/ 2>/dev/null

# Event/trip photos
mv gallery/TRIP*.jpg gallery/trips/ 2>/dev/null
mv gallery/Tesla_Coil.jpeg gallery/events/ 2>/dev/null
mv gallery/NCP*.JPG gallery/events/ 2>/dev/null

# ============ BANNER IMAGES ============

echo "Organizing banner images..."

# Move page header/banner images
for banner in about.JPG research.JPG faculty.JPG btech.png mtech.png phd.png ms.png gallery.jpg; do
  if [ -f "$banner" ]; then
    mv "$banner" "banners/" 2>/dev/null
  fi
done

# ============ LOGOS ============

echo "Organizing logos..."

# Move logos and placeholders
for logo in iiti-logo*.png ee-logo*.png eesa_logo.png profile_placeholder.jpg; do
  if [ -f "$logo" ]; then
    mv "$logo" "logos/" 2>/dev/null
  fi
done

echo "=== Migration Complete ==="

# Show folder contents
echo ""
echo "New structure:"
find . -type d -name ".*" -prune -o -type d -print | head -30
